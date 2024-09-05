import { GoogleGenerativeAI } from "@google/generative-ai";
import ErrorWrapper from "../utils/ErrorWrapper.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import TeachableMachine from "@sashido/teachablemachine-node";

export const askQuestion=ErrorWrapper(async(req,res,next)=>{
    try {
        const {question}=req.body;
        if(!question){
            throw new ErrorHandler(401,`Please ask your query`);
        }
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = question;
        const result = await model.generateContent(prompt);

        const answer=result.response.text();
        
        const chat ={
            query:question,
            solution:answer
        }

        const prevHistory=req.user.chatHistory;
        prevHistory.unshift({chat});
        req.user.save();


        res.status(200).json({
            success:true,
            message:"Responded Successfully",
            answer:answer
        })    
    } catch (error) {
        throw new ErrorHandler(501,`Our ChatBot Childish, Not responding currently`);
    }
    
})


export const detectCrop=ErrorWrapper(async(req,res,next)=>{
    
    const model = new TeachableMachine({
        modelUrl: "https://teachablemachine.withgoogle.com/models/hrT0Su0U7/"
    });

    const { url } = req.body;
    
    return model.classify({
        imageUrl: url,
    }).then((predictions) => {
        // console.log(predictions);
        let result= predictions;
        // console.log(result);
        let crop;
        let maxscore=0;

        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            if(element.score>maxscore){
                maxscore=element.score;
                crop=element.class;        
            }
        }

        res.status(200).json({
            crop:crop,
            score:maxscore
        })
    })
    .catch((err) => {
        throw new ErrorHandler(401,`An Error Occured`);
    });

})
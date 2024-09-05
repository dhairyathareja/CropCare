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

async function detectCrop(url){
    const model = new TeachableMachine({
        modelUrl: "https://teachablemachine.withgoogle.com/models/hrT0Su0U7/"
    });

    const result=await model.classify({
        imageUrl: url,
    })
    let crop;
    let maxscore=0;

    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        if(element.score>maxscore){
            maxscore=element.score;
            crop=element.class;        
        }
    }
    return [crop,maxscore]        
}

async function Disease(crop,url){
    
    let cropModel="";
    const allCrops=[
        {
            name:"coffee",
            link:"https://teachablemachine.withgoogle.com/models/oxZcDC48I/"
        },
        {
            name: "tea",
            link: "https://teachablemachine.withgoogle.com/models/UHNQYLoR8/"
        },
        {
                name: "rice",
                link: "https://teachablemachine.withgoogle.com/models/XLxMAlTz5/"
        },
        {
                name: "cotton",
                link: "https://teachablemachine.withgoogle.com/models/fTGqrmWBx/"
        },
        {
                name: "maize",
                link: "https://teachablemachine.withgoogle.com/models/8LlTPB8oA/"
        },
        {
                name: "millet",
                link: "https://teachablemachine.withgoogle.com/models/-0zjKVJ-z/"
        },
        {
                name: "wheat",
                link: "https://teachablemachine.withgoogle.com/models/OMoV_wJxi/"
        },
        {
                name: "jute",
                link: "https://teachablemachine.withgoogle.com/models/4MogXrWtS/"
        },
        {
                name: "rubber",
                link: "https://teachablemachine.withgoogle.com/models/jNgPNbDlj/"
        },
        {
                name: "sugercane",
                link: "https://teachablemachine.withgoogle.com/models/CB6aOIvL1h/"
        }
            
    ]
    
    for (let i = 0; i < allCrops.length; i++) {
        if(allCrops[i].name=crop[0]){
            cropModel+=allCrops[i].link;
        }
    }

    const model = new TeachableMachine({
        modelUrl: cropModel
    });

    const result=await model.classify({
        imageUrl: url,
    })
    
    let cropDisease;
    let maxscore;

    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        if(element.score>maxscore){
            maxscore=element.score;
            crop=element.class;
        }
    }
    return [cropDisease,maxscore];

    
}



export const detetctDisease=ErrorWrapper(async(req,res,next)=>{
    
    const{url}=req.body;
    const crop=await detectCrop(url);
    const cropDisease=Disease(crop,url);


})
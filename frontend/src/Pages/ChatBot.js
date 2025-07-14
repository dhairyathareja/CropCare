import React, { useEffect, useRef, useState } from 'react'
import axios from '../utils/axios'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Styles from "./ChatBot.module.css"
import Response from './Response';



const ChatBot = () => {
    const questionRef = useRef();
    
    const [isSolved, setisSolved] = useState(false);
    const [dataResponse, setdataResponse] = useState("");        
        
    const askQuestion=async(e)=>{
        const question=questionRef.current.value.trim();
        e.preventDefault(); // Prevent form from refreshing the page
        try {
            if(question.length>3){
                const { data } = await axios.post('user/chatBot',{question});
                
                setdataResponse(data.data);
                setisSolved(true);
                questionRef.current.value="";
            }
            

        } catch (error) {
            alert(error.response?.data?.message || 'Error in identifying Image');
        }
    }
    
        

    return (
        

        <div className={Styles['chatBotPage']}>
            <div className='head'> कृषिसारथी </div>
            <div className={Styles['tagline']}>Your helping hand in Agriculture</div>
            
            
            
            <div className={Styles['inputSection']}>
                <input ref={questionRef} type='text' placeholder='Ask Here....'/>
                <button onClick={askQuestion}>Ask</button>
            </div>


            {isSolved && <Response data={dataResponse}/>}
            
        </div>
    )
}

export default ChatBot;



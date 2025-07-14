import React, { useRef, useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import Styles from "./detector.module.css"
import Result from './Result';



const Detector = () => {
    
    const imageRef = useRef();

    const navigate = useNavigate();
    const [isDetected, setisDetected] = useState(false);
    const [dataResponse, setdataResponse] = useState([])
    const DetectorHandler = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        const image = imageRef.current.files[0]; // Get the uploaded file
        try {
            const formData = new FormData();
            if (image) formData.append('image', image); // Add file to the form data if available

            const { data } = await axios.post('user/detectDisease', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setisDetected(true);
            setdataResponse(data);
            

        } catch (error) {
            alert(error.response?.data?.message || 'Error in identifying Image');
        }
    };

    return (
        <div className={Styles['detectPage']}>

            <div className='head'>Disease Detector</div>
            <div className={Styles['tagline']}> AI-Powered Detection for 10+ Crops in 120 Seconds . . . .</div>

            <div className={Styles['sampleImages']}>
                Sample Images:-
                <a href="/CropCare_Sample.zip" download="CropCare_Sample.zip">
                    <button>Download</button>
                </a> 
            </div>
            <div className={Styles['detectDetails']}>
                <form onSubmit={DetectorHandler}>
                    <div className={Styles['imgForm']}>
                        <span>Upload Your Image Here : </span>
                        <input type="file" ref={imageRef} accept='image/*'/> <br />
                        <button type='submit' className={Styles['DetectBtn']}>Detect</button>
                    </div>
                </form>
            </div>


            {isDetected && <Result data={dataResponse}/>}

        </div>
    );
};

export default Detector;
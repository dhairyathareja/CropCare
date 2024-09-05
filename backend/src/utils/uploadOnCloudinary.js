import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

const uploadOnCloudinary=async(filePath)=>{
    
    try {
        if(!filePath) return null
        const response = await cloudinary.uploader.upload(filePath,{folder:'CropCare'});
        fs.unlinkSync(filePath);
        return response;

    } catch (error) {
        fs.unlinkSync(filePath);
        return error;
    }    
       
}

export default uploadOnCloudinary;

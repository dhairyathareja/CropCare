import React from 'react'
import Styles from './home.module.css'


const Home = () => {
    
    return (
        <div className={Styles['HomePage']}>

            <div className={Styles['imgHome']}>
                <img src='https://res.cloudinary.com/dvnza1g1p/image/upload/v1741636090/CropCare/mhyhknvqhw8sbjqgufap.png'></img>
            </div>


            <div className={Styles['introSection']}>
                
                <div className={Styles['introBox']}>
                    <div className={Styles['heading']}>
                        OUR MISSION
                    </div>

                    <div className={Styles['description']}>
                        <p>
                            Our mission is to transform agriculture by harnessing the power of drone technology and artificial intelligence. 
                            We strive to provide innovative, data-driven solutions that enable government agencies and private companies to optimize crop health, resource management, and sustainability.
                            Through precision agriculture, we aim to enhance productivity, reduce environmental impact, and foster collaboration across the agricultural sector, creating a smarter and more sustainable future for farming.
                        </p>
                    </div>
                </div>
                
                <div className={Styles['introBox']}>
                    <div className={Styles['heading']}>
                        WHAT WE DO ??
                    </div>

                    <div className={Styles['description']}>
                            
                            At CropCare, we specialize in leveraging drone technology and AI-driven analytics to improve agricultural management. 
                            Our platform enables government officials and private companies to monitor large-scale crops in real-time, detect stress, diseases, and nutrient deficiencies, and make informed decisions to optimize productivity.
                        
                    </div>
                </div>
                
                <div className={Styles['introBox']}>

                    <div className={Styles['heading']}>
                        We Offer
                    </div>

                    <div className={Styles['description']}>
                    <ul>
                                    <li> <strong>Drone-Based Crop Monitoring: </strong> High-resolution multispectral imagery captured by drones for comprehensive crop analysis.</li>
                                    <li> <strong>AI-Powered Insights: </strong> Advanced AI models that analyze crop health and offer actionable recommendations for irrigation, fertilization, and pest control.</li>
                                    <li> <strong>Collaborative Platform: </strong> A space for agricultural professionals to share insights, strategies, and best practices to drive innovation in the industry.</li>
                                </ul>
                                <p>Through our work, we aim to support efficient, sustainable agricultural practices that maximize yield and minimize resource waste.</p>
                    </div>
                </div>

                <div className={Styles['introBox']}>
                    <div className={Styles['heading']}>
                        ABOUT US 
                    </div>

                    <div className={Styles['description']}>
                        <p>
                            At CropCare, we are revolutionizing agriculture through cutting-edge drone technology and AI-powered solutions. 
                            Our platform empowers government agencies, agricultural departments, and private companies to make data-driven decisions for optimizing crop health and resource management.
                            By integrating advanced drone imaging with AI analysis, we provide real-time insights into crop stress, diseases, and nutrient deficiencies, enabling smarter, more efficient agricultural practices.
                            We are committed to fostering collaboration, innovation, and sustainability in agriculture. Our vision is to create a connected ecosystem where precision farming becomes the norm, driving productivity and environmental responsibility. 
                            Together, we aim to shape the future of agriculture through technology and data-driven solutions.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;
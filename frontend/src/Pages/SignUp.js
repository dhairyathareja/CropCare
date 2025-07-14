import React, { useRef } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import Styles from './auth.module.css';
import { useDispatch } from 'react-redux';  


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const profileImageRef = useRef();

    const navigate = useNavigate();
    const dispatch=useDispatch();

    const signUpHandler = async () => {
      
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const name = nameRef.current.value.trim();
        const profileImage = profileImageRef.current.files[0]; // Get the uploaded file

        if (!email) return alert('Please Enter Email');
        if (!password) return alert('Please Enter Password');
        if (!name) return alert('Please Enter Name');

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('name', name);
            if (profileImage) formData.append('profileImage', profileImage); // Add file to the form data if available

            const { data } = await axios.post('auth/signUp', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if(data.success){
                dispatch({type:'SET_USER',payload: data.user});
                navigate('/detector');
            }

            
        } catch (error) {
            alert(error.response?.data?.message || 'Error signing up');
        }
    };

    return (
        <div className={Styles['signUpPage']}>
            <div className={Styles['signUpIcon']}>
                <img width={'80%'} height={'80%'} src='https://cdn-icons-png.flaticon.com/512/10423/10423409.png' alt="Sign Up Icon" />
            </div>

            <div className={Styles['signUpDetails']}>
                <h1>Sign Up !!!</h1>

                    <div className={Styles['inpDiv']}>
                        <label>Name</label>
                        <input ref={nameRef} type='text' placeholder='Enter Your Name' /> <br />
                    </div>

                    <div className={Styles['inpDiv']}>
                        <label>Email</label>
                        <input ref={emailRef} type='text' placeholder='Enter Your Email' /> <br />
                    </div>

                    <div className={Styles['inpDiv']}>
                        <label>Password</label>
                        <input ref={passwordRef} type='password' placeholder='Enter Your Password' />
                    </div>
                    
                    <div className={Styles['inpDiv']}>
                        <label>Profile Photo: </label>
                        <input type="file" ref={profileImageRef} accept='image/*' /> <br />
                    </div>
                    
                    <button type='submit'  onClick={signUpHandler} className={Styles['signUpBtn']}>SignUp</button>
                
            </div>
        </div>
    );
};

export default SignUp;
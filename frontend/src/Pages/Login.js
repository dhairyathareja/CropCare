import React, { useRef } from 'react'
import axios from '../utils/axios'
import { useDispatch } from 'react-redux';  
import { useNavigate } from 'react-router-dom';
import Styles from './auth.module.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef=useRef();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const loginHandler=async()=>{
        const email=emailRef.current.value.trim();
        const password=passwordRef.current.value.trim();    

        if(!email) return alert('Please Enter Email');
        if(!password) return alert('Please Enter Password');

        try {
            
            const {data}=await axios.post('auth/login',{email,password});
            
            dispatch({type:'SET_USER',payload: data.user[0]});
            
            navigate('/detector');
            
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className={Styles['loginPage']}>
            <div className={Styles['loginIcon']}>
                <img width={'80%'} height={'80%'} src='https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-user-profile-login-icon-in-silver-color-access-authentication-vector-png-image_14688836.png'/>
            </div>

            <div className={Styles['loginDetails']}>
                <h1>Login !!!</h1>
                <div className={Styles['inpDiv']}>
                    <label>Email</label>
                    <input ref={emailRef} type='text' placeholder='Enter Your Email'/> <br/>
                </div>
                
                <div className={Styles['inpDiv']}>
                    <label>Password</label>
                    <input ref={passwordRef} type='password' placeholder='Enter Your Password'/> <br/>
                </div>
                
                <button onClick={loginHandler} className={Styles['loginBtn']}>Login</button>
            </div>
        </div>
    )
}

export default Login;



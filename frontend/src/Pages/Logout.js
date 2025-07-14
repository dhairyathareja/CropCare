import React from 'react'
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Styles from './logout.module.css';

const Logout = () => {
    
    const navigate=useNavigate();
    const userData=useSelector(state=>state.userReducer);

    const logoutHandler=async()=>{

        try {
            const email=userData.email;
            const{data}=await axios.post('auth/logout',{email});
            if(data.success){
                navigate('/');
                window.location.reload();
            }

        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const cancelLogout=async()=>{
        try {
            navigate('/');

        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className={Styles['logoutPage']}>
            <h2>Are You Sure you want to Leave ??</h2>
            <div className={Styles['btnSection'] }>
                <button className={`${Styles['logoutBtn']} ${Styles['yesBtn']}`} onClick={logoutHandler}>Yes</button>
                <button className={`${Styles['logoutBtn']} ${Styles['noBtn']}`} onClick={cancelLogout}>No</button>
            </div>
        </div>
    )
}

export default Logout;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://65.0.109.216:4444/',
    withCredentials:true
});

export default instance;
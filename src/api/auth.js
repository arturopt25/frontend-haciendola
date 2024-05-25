import axios from './axios'



export const  loginRequest = user => axios.post(`/auth/signin`, user);

export const verifyTokenRequest = () => axios.get('/auth/verify')
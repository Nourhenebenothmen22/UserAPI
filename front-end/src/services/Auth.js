
import axiosContent from "./axiosContent";

const Login=(data)=>{
    return axiosContent.post("user/login",data)
}
const Logout=(data)=>{
    return axiosContent.post("user/logout",data)
}
const Forget=(data)=>{
    return axiosContent.post("user/forget",data)
}
const ResetPassword= (token, data) => {
    return axiosContent.post(`user/reset/${token}`, data)
  }
  const registre=(data)=>{
    return axiosContent.post('/customer/add',data)
  }
  const VerifyCode=(code) => {
    return axiosContent.get(`user/verify/${code}`);
  }

export default{Login,Logout,Forget,ResetPassword,VerifyCode,registre}

import axios from "axios";

const api=axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL || 'https://swamy123.pythonanywhere.com/',
    headers:{
        "Content-Type":"application/json"
    }
})
api.interceptors.request.use((config)=>{
     const token = localStorage.getItem("auth_token");
     if (token){
        config.headers.Authorization=`Token ${token}`
     }
     return config
})
api.interceptors.response.use((response)=>response,
(error)=>{
    if(error.response){
        console.log(error.response.data.error)
         localStorage.clear();
    }
    return Promise.reject(error)
})


// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.clear();
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );
export default api
import React,{useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
     const navigate = useNavigate();
    console.log(navigate)
    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user",user)
    if(user){
         if (user.is_student) navigate("/student/dashboard");
    }
    
    }, [navigate])
    

}

export default useAuthRedirect

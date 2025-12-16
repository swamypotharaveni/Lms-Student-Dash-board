import React from 'react'
import { Navigate } from 'react-router-dom';
const StudentRoute = ({children}) => {
   const token = localStorage.getItem("auth_token");
     const user = JSON.parse(localStorage.getItem("user"));
     if (!token || ! user){
          return <Navigate to="/login" />;
     }
     if (!user.is_student){
       return <Navigate to="/login" />;  
     }

    return children
}

export default StudentRoute

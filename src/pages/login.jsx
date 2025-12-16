import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginUser } from '../services/authService';
import { useNavigate } from "react-router-dom";
import useAuthRedirect from '../services/useAuthRedirect';
const Login = () => {
    useAuthRedirect()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})
      const navigate = useNavigate();
    const validate = () => {
        const newErrors = {}
        if (!email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Enter a valid email'
        }
        if (!password) {
            newErrors.password = 'Password is required'
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0

    }
    const handlesubmit =async (e) => {
        console.log(email, password)
        e.preventDefault()
        if (!validate()) return
        try {
            const data= await LoginUser({ email, password });
            if (data.user.is_student) {
        navigate("/student/dashboard");
      } 
        } catch (error) {
           alert(error.message);
            
        }


    }
    return (
        <div className='bg-gray-100 h-screen items-center justify-center flex'>


            <section className='shadow-lg p-6 bg-white rounded-lg w-full max-w-md'>
                <h1 className='font-bold text-3xl text-center'>Login</h1>


                <form onSubmit={handlesubmit} className='mb-3 pt-2'>


                    <div>
                        <label htmlFor="email" className='block mb-1 font-medium' >Email</label>
                        <input className="border rounded py-2 px-3 w-full mb-3placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />{errors.email && (<p className="text-red-500 font-bold text-sm mt-1">{errors.email}</p>)}
                    </div>


                    <div>
                        <label htmlFor="password" className='block mb-1 font-medium'>Password</label>
                        <input className="border rounded py-2 px-3 w-full mb-3  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="pwd"
                            id="password"
                            name="password"
                            placeholder="Enter your password" pattern="[^ ]*"
                            onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => {
                                if (e.key === ' ') {
                                    e.preventDefault()
                                }
                            }}
                        />{errors.password && (<p className="text-red-500 text-sm mt-1 font-bold">{errors.password}</p>)}

                    </div>


                    {/* <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="h-4 w-4"
                            id="remember"

                        />
                        <label htmlFor="remember" className="text-indigo-700">
                            Remember me
                        </label>
                    </div> */}


                    <div className='flex py-2'>
                        <button type="submit" className='w-full bg-indigo-700 py-4 rounded-lg text-white hover:text-indigo-100 transition'>Login</button>
                    </div>


                    <div className='flex gap-3'>
                        <a href="#" className="text-indigo-700 hover:underline">Forgot password?</a>
                        <br />
                        <Link to="/register" className="text-indigo-700 hover:underline">Create an account</Link>
                    </div>

                </form>

            </section>

        </div>
    )
}

export default Login

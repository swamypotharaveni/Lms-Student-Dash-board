import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState(false); 
    const [errors, setErrors] = useState({})
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
        if (!username) {
            newErrors.username = 'Username is required'
        } else if (username.length < 5) {
            newErrors.username = 'UserName must be at least 5 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0

    }

    const handlesubmit = (e) => {

  console.log({
    email,
    username,
    password,
     is_student: !role,     
  is_instructor: role
  });
        e.preventDefault()
        if (!validate()) return


    }
    return (
        <div className='bg-gray-100 h-screen items-center justify-center flex'>


            <section className='shadow-lg p-6 bg-white rounded-lg w-full max-w-md'>
                <h1 className='font-bold text-3xl text-center'>Register</h1>


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
                        <label htmlFor="username" className='block mb-1 font-medium' >User Name</label>
                        <input className="border rounded py-2 px-3 w-full mb-3placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your Username"
                            onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => {
                                if (e.key === "") {
                                    e.preventDefault()
                                }
                            }}
                        />{errors.username && (<p className="text-red-500 font-bold text-sm mt-1">{errors.username}</p>)}
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
  <div className='mt-3'>
  <p className='font-medium mb-1'>Select your role:</p>
  <div className="flex gap-4 items-center">
    {/* Student */}
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="role"
        checked={role === false} 
        onChange={() => setRole(false)} 
        className="accent-indigo-600"
      />
      Student
    </label>

    {/* Instructor */}
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="role"
        checked={role === true}  // Instructor = true
        onChange={() => setRole(true)} // directly set boolean
        className="accent-indigo-600"
      />
      Instructor
    </label>
  </div>
</div>

                    {/* <div className=''>
                        <p>Select your role:</p>
                          <input
        type="radio"
        id="student"
        name="role"
        value="student"
        checked={role === "student"}
        onChange={handleChange}
      />
      <label htmlFor="student">Student</label><br />

      <input
        type="radio"
        id="instructor"
        name="role"
        value="instructor"
        checked={role === "instructor"}
        onChange={handleChange}
      />
      <label htmlFor="instructor">Instructor</label><br />

                    </div> */}


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
                        <button type="submit" className='w-full bg-indigo-700 py-4 rounded-lg text-white hover:text-indigo-100 transition'>Sign up</button>
                    </div>


                    <div className='flex gap-3'>
                        <a href="#" className="text-indigo-700 hover:underline">you already account</a>
                        <br />
                        <Link to="/login" className="text-indigo-700 hover:underline">go to loign your account</Link>
                    </div>

                </form>

            </section>

        </div>
    )
}

export default Register

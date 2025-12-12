import React from 'react'

const Login = () => {
    return (
        <div className='bg-gray-100 h-screen items-center flex justify-center'>
            <form className='bg-white p-6 rounded-2xl shadow-md w-96'>
                <h2 class="text-2xl font-bold text-indigo-600 underline decoration-4 decoration-indigo-600 underline-offset-4 text-center mb-4">
                    Login
                </h2>
                <input type='email' className='border p-2 w-full rounded mb-3' placeholder="Email" />
                <input type='pwd' className='border p-2 w-full rounded mb-3' placeholder="Password" />
                <button className="w-full bg-indigo-600 text-white font-semibold p-2 rounded hover:bg-indigo-700 transition" >Login</button>
                  <div className='pt-3 justify-center flex gap-2'>
                  <p className="text- text-gray-600">Don't have an account?</p>
                    <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
                        Register
                    </span>            </div>
            </form>
          
            
        </div>
    )
}

export default Login
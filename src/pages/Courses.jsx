import React from 'react'

const Courses = () => {
  return (
    <>
     <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                    My Courses
                </h2>

                <div className="grid grid-cols-3 gap-6">

                    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-gray-800">React JS Course</h3>
                        <p className="text-gray-600 mt-2">Progress: 70%</p>
                        <button className="bg-indigo-600 text-white w-full mt-4 p-2 rounded hover:bg-indigo-700 transition">
                            Continue
                        </button>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-gray-800">Python Beginner</h3>
                        <p className="text-gray-600 mt-2">Progress: 45%</p>
                        <button className="bg-indigo-600 text-white w-full mt-4 p-2 rounded hover:bg-indigo-700 transition">
                            Continue
                        </button>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-gray-800">Django API Course</h3>
                        <p className="text-gray-600 mt-2">Progress: 20%</p>
                        <button className="bg-indigo-600 text-white w-full mt-4 p-2 rounded hover:bg-indigo-700 transition">
                            Continue
                        </button>
                    </div>

                </div>
                </>
  )
}

export default Courses
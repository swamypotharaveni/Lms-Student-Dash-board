import React, { useEffect, useState } from 'react'

import { getAllCourses } from '../services/courseService'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllCourses();
        setCourses(data);
      } catch (error) {
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
    if (loading) return <p>Loading courses...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
    return (
        <>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                My Courses
            </h2>

            <div className="grid grid-cols-3 gap-6">
                {courses.length == 0?( <p>No courses available</p>):(
                    courses.map((course)=>(
                          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition" key={course.id}>
                    <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                    <p className="text-gray-600 mt-2">Progress: 70%</p>
                    <button className="bg-indigo-600 text-white w-full mt-4 p-2 rounded hover:bg-indigo-700 transition">
                        Continue
                    </button>
                </div>
                        
                    ))
                  )}

               

             
          

            </div>
        </>
    )
}

export default Courses
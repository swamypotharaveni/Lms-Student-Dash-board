import React from "react";
import { LayoutDashboard, BookOpen, FileText, User,Settings, LogOut } from "lucide-react";

const StudentDashboard = () => {
    return (
        <div className="h-screen flex bg-gray-100">

            {/* Sidebar */}
            <div className="bg-indigo-700 text-white w-64 p-6 flex flex-col shadow-xl">

                {/* Profile */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 bg-white text-indigo-700 font-bold rounded-full flex items-center justify-center">
                        S
                    </div>
                    <div>
                        <p className="font-bold text-lg ">Student</p>
                        <p className="text-sm text-gray-300">swamy@gmail.com</p>
                    </div>
                </div>

                <h2 className="text-xl font-bold tracking-wide mb-5">LMS</h2>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">

                    <a className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600 cursor-pointer transition">
                        <LayoutDashboard size={20} /> Dashboard
                    </a>

                    <a className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600 cursor-pointer transition">
                        <BookOpen size={20} /> My Courses
                    </a>

                    <a className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600 cursor-pointer transition">
                        <FileText size={20} /> Assignments
                    </a>

                    <a className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600 cursor-pointer transition">
                        <User size={20} /> Profile
                    </a>
                     <a className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600 cursor-pointer transition">
                        <Settings size={20} /> Settings
                    </a>
                    

                    <a className="flex items-center gap-3 p-2 mt-8 bg-red-500/80 hover:bg-red-600 rounded transition cursor-pointer">
                        <LogOut size={20} /> Logout
                    </a>

                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 overflow-auto">

                <h1 className="text-3xl font-bold text-indigo-700 mb-10">
                    Student Dashboard
                </h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-12">

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-gray-600">Enrolled Courses</h3>
                        <p className="text-4xl font-bold text-indigo-700 mt-3">4</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-gray-600">Completed</h3>
                        <p className="text-4xl font-bold text-indigo-700 mt-3">2</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold text-gray-600">Pending Tasks</h3>
                        <p className="text-4xl font-bold text-indigo-700 mt-3">5</p>
                    </div>
                </div>

                {/* Courses List */}
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
            </div>
        </div>
    );
};

export default StudentDashboard;

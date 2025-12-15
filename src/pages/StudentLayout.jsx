import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const StudentLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // clear token / session here
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-2 rounded cursor-pointer transition
     ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"}`;

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
            <p className="font-bold text-lg">Student</p>
            <p className="text-sm text-gray-300">swamy@gmail.com</p>
          </div>
        </div>

        <h2 className="text-xl font-bold tracking-wide mb-5">LMS</h2>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">

          <NavLink to="/student/dashboard" className={linkClass}>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>

          <NavLink to="/student/courses" className={linkClass}>
            <BookOpen size={20} /> My Courses
          </NavLink>

          <NavLink to="" className={linkClass}>
            <FileText size={20} /> Assignments
          </NavLink>

          <NavLink to="" className={linkClass}>
            <User size={20} /> Profile
          </NavLink>

          <NavLink to="/student/settings" className={linkClass}>
            <Settings size={20} /> Settings
          </NavLink>

          <button
            onClick={logout}
            className="flex items-center gap-3 p-2 mt-8 bg-red-500/80 hover:bg-red-600 rounded transition"
          >
            <LogOut size={20} /> Logout
          </button>

        </nav>
      </div>

      {/* Page Content */}
      <div className="flex-1 p-10 overflow-auto">
        <Outlet />
      </div>

    </div>
  );
};

export default StudentLayout;

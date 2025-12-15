const StudentDashboard = () => {
  return (

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
                </div>
    
  );
};

export default StudentDashboard;
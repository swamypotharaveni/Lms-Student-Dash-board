import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/regitser";

import StudentLayout from "./pages/StudentLayout";
import StudentDashboard from "./pages/StudentDashboard";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Layout */}
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

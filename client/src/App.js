import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import About from "./components/About";
import AdminRegisterPage from "./pages/admin/AdminRegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

const App = () => {
  const { currentRole } = useSelector((state) => state.user);

  return (
    <Router>
      {currentRole === null && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
          <Route path="/Adminregister" element={<AdminRegisterPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      )}

      {currentRole === "Admin" && <AdminDashboard />}
      {currentRole === "Student" && <StudentDashboard />}
      {currentRole === "Teacher" && <TeacherDashboard />}
    </Router>
  );
};

export default App;

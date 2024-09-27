import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CourseProvider, UserContext } from './context/context';
import AdminDashboard from './component/AdminDashboard';
import TeacherDashboard from './component/TeacherDashboard';
import StudentDashboard from './component/StudentDashboard';
import LoginPage from './page/LoginPage';

function App() {
  const { user } = useContext(UserContext); // Assuming user is from context

  return (
    <CourseProvider>
      <Router>
        <div className="navbar">
          <h1>EMS</h1>
        </div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {user && user.role === 'admin' && (
            <Route path="/admin" element={<AdminDashboard />} />
          )}
          {user && user.role === 'teacher' && (
            <Route path="/teacher" element={<TeacherDashboard />} />
          )}
          {user && user.role === 'student' && (
            <Route path="/student" element={<StudentDashboard />} />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;

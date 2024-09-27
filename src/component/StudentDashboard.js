import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

const StudentDashboard = () => {
  const { courses } = useContext(CourseContext);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <h3>Your Enrolled Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            {/* Add more features like submitting assignments here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;

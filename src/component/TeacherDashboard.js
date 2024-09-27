import React, { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';

const TeacherDashboard = () => {
  const { courses } = useContext(CourseContext);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <h3>Your Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id} onClick={() => setSelectedCourse(course)}>
            {course.title}
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <div>
          <h3>Manage Course Content: {selectedCourse.title}</h3>
          <p>{selectedCourse.description}</p>
          {/* Add more content management features here, like uploading assignments */}
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;

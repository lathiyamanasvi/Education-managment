import React, { useContext, useState } from 'react';
import { CourseContext } from '../context/CourseContext';

const AdminDashboard = () => {
  const { courses, addCourse, deleteCourse } = useContext(CourseContext);
  const [newCourse, setNewCourse] = useState({ id: '', title: '', description: '' });

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    setNewCourse({ id: '', title: '', description: '' });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Create Course</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          value={newCourse.id}
          onChange={handleChange}
          placeholder="Course ID"
          required
        />
        <input
          name="title"
          value={newCourse.title}
          onChange={handleChange}
          placeholder="Course Title"
          required
        />
        <textarea
          name="description"
          value={newCourse.description}
          onChange={handleChange}
          placeholder="Course Description"
          required
        ></textarea>
        <button type="submit">Add Course</button>
      </form>

      <h3>All Courses</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <button onClick={() => deleteCourse(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

import React, { createContext, useState, useEffect } from 'react';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(() => {
    // Retrieve courses from local storage
    const storedCourses = localStorage.getItem('courses');
    return storedCourses ? JSON.parse(storedCourses) : [];
  });

  useEffect(() => {
    // Update local storage whenever courses change
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  const deleteCourse = (id) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, deleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

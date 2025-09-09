import React from "react";
import CourseCard from "./CourseCard";
import "./FeaturedCourses.css";

function FeaturedCourses() {
  const courses = [
    { title: "Bachelor of Information Technology (BIT)", img: "https://via.placeholder.com/250x150" },
    { title: "Miracle Certified WebApp Developer (MCWD)", img: "https://via.placeholder.com/250x150" },
    { title: "Miracle Certified Computerized Accountant (MCCA)", img: "https://via.placeholder.com/250x150" },
  ];

  return (
    <section className="featured-courses">
      <h3>Our Featured Courses</h3>
      <div className="course-list">
        {courses.map((course, i) => (
          <CourseCard key={i} title={course.title} img={course.img} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCourses;

import React from "react";
import "./CourseCard.css";

function CourseCard({ title, img }) {
  return (
    <div className="course-card">
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default CourseCard;

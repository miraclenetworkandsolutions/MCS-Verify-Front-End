import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Bachelor of Information Technology</h2>
        <p>University of Colombo School of Computing<br />Study Anytime. Anywhere.</p>
        <button className="btn">Enroll Now</button>
      </div>
      <div className="hero-image">
        <img src="https://via.placeholder.com/400x250" alt="Graduation" />
      </div>
    </section>
  );
}

export default Hero;

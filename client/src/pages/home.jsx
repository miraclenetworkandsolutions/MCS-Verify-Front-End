import React from "react";
import "./Home.css"; // optional CSS file

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bachelor of Information Technology</h1>
          <p>University of Colombo School of Computing<br />Study Anytime. Anywhere.</p>
          <button className="btn-enroll">Enroll Now</button>
        </div>
        <div className="hero-image">
          <img src="/images/graduation.png" alt="Graduation" />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="courses">
        <h2>Our Featured Courses</h2>
        <div className="course-grid">
          <div className="course-card">
            <img src="/images/bit.png" alt="BIT" />
            <h3>Bachelor of Information Technology (BIT)</h3>
          </div>
          <div className="course-card">
            <img src="/images/mcwd.png" alt="MCWD" />
            <h3>Miracle Certified WebApp Developer (MCWD)</h3>
          </div>
          <div className="course-card">
            <img src="/images/mcca.png" alt="MCCA" />
            <h3>Miracle Certified Computerized Accountant (MCCA)</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

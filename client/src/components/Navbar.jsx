import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="top-bar">
        <span>📞 0777675837 | ✉️ info@mcsictschool.lk</span>
      </div>
      <nav className="nav">
        <div className="logo">MCS <span>School of Computing</span></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/publication">Publication</Link></li>
          <li><Link to="/news-events">News & Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/vls">VLS</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

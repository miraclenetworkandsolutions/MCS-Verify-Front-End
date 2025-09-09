import React from "react";
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
          <li>Home</li>
          <li>Courses</li>
          <li>Publication</li>
          <li>News & Events</li>
          <li>Gallery</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>VLS</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

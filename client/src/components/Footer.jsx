import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <h4>Miracle Computer School</h4>
          <p>Spring Field, Galahitiyawa, Kuliyapitiya, 60200</p>
          <p>📞 0777675837</p>
          <p>✉️ info@mcsictschool.com</p>
        </div>
        <div>
          <h4>Programmes</h4>
          <ul>
            <li>Degree Programmes</li>
            <li>Diplomas</li>
            <li>Certificate</li>
            <li>ICT A/L</li>
          </ul>
        </div>
        <div>
          <h4>Menu</h4>
          <ul>
            <li>Courses</li>
            <li>Publication</li>
            <li>Events</li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
      <p className="copy">© 2022 MCS School of Computing</p>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Miracle Computer School</h3>
            <div className={styles.contactItem}>
              <span className={styles.icon}></span>
              <span>Spring Field, Galahitiyawa, Kulyapitiya, 60200</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <span>077 767 5837</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <span>info@mcsictschool.com</span>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/" className={styles.socialLink}>📘</a>
              <a href="https://web.whatsapp.com/" className={styles.socialLink}>📷</a>
              <a href="https://twitter.com/login?lang=ar" className={styles.socialLink}>📺</a>
              <a href="https://www.youtube.com/account" className={styles.socialLink}>🐦</a>
              <a href="https://dialpad.com/login" className={styles.socialLink}>📞</a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Programmes</h3>
            <ul className={styles.linkList}>
              <li><Link to="/courses" className={styles.link}>Degree Programmes</Link></li>
              <li><Link to="/courses" className={styles.link}>Higher Diploma</Link></li>
              <li><Link to="/courses" className={styles.link}>Diplomas</Link></li>
              <li><Link to="/courses" className={styles.link}>Certificate</Link></li>
              <li><Link to="/courses" className={styles.link}>Professional Certification</Link></li>
              <li><Link to="/courses" className={styles.link}>Grade Classes</Link></li>
              <li><Link to="/courses" className={styles.link}>ICT O/L</Link></li>
              <li><Link to="/courses" className={styles.link}>ICT A/L</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Quick Menu</h3>
            <ul className={styles.linkList}>
              <li><Link to="/courses" className={styles.link}>Courses</Link></li>
              <li><Link to="/about" className={styles.link}>Publication</Link></li>
              <li><Link to="/about" className={styles.link}>News and Events</Link></li>
              <li><Link to="/about" className={styles.link}>Gallery</Link></li>
              <li><Link to="/about" className={styles.link}>About Us</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact Us</Link></li>
              <li><Link to="/certificate-verification" className={styles.link}>VLS</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Latest News</h3>
            <div className={styles.newsItem}>
              <img 
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                alt="2024 AL ICT Trip" 
                className={styles.newsImage}
              />
              <div className={styles.newsContent}>
               <a href="https://www.mcsictschool.com/index.php/annual-trip-2020-al-ict-batch/" className={styles.newsTitle}>   
                <h4 className={styles.newsTitle}>2024 AL ICT – Pidurangala Trip</h4>
               <p className={styles.newsDate}>December 2024</p>
               </a>
            
                
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            <Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link>
            <Link to="/terms" className={styles.footerLink}>Terms of Service</Link>
          </div>
          <p className={styles.copyright}>
            © Copyright 2025 MCS School of Computing | All Rights Reserved | 
            Powered by Miracle Network & Solutions (Pvt) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
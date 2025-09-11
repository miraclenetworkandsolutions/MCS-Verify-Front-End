import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navContent}>
            <Link to="/" className={styles.logo}>
            <div className={styles.heroBackground}>
        <img 
          src="https://www.mcsictschool.com/wp-content/uploads/2022/09/cropped-MCS-LOGO.png" 
          alt="Students learning" 
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>
            
            </Link>




            <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
              <Link 
                to="/Admin" 
                className={`${styles.navLink} ${isActive('/Admin') ? styles.active : ''}`}
              >
                Admin
              </Link>
             
              <Link 
                to="/certificate-verification" 
                className={`${styles.navLink} ${isActive('/certificate-verification') ? styles.active : ''}`}
              >
                Verify Certificate
              </Link>
              <Link 
                to="/about" 
                className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
              >
               
              </Link>
              <Link 
                to="/Student" 
                className={`${styles.navLink} ${isActive('/Student') ? styles.active : ''}`}
              >
             Student
              </Link>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.phone}>
               
              </div>
              <div className={styles.socialLinks}>
               
              </div>
            </div>

            <button 
              className={styles.mobileToggle}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;
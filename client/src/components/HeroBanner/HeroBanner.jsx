import React from 'react';
import { useToast } from '../../context/ToastContext';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  const { addToast } = useToast();

  const handleEnrollClick = () => {
    addToast('Redirecting to enrollment form...', 'success');
  };

  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroBackground}>
        <img 
          src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
          alt="Students learning" 
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🎯</span>
              <span>Enabling IT Professionals</span>
            </div>
            
            <div className={styles.degreeInfo}>
              <div className={styles.degreeIcon}>BIT</div>
              <div className={styles.degreeDetails}>
                <h1 className={styles.heroTitle}>Bachelor of Information Technology</h1>
                <p className={styles.heroSubtitle}>University of Colombo School of Computing</p>
              </div>
            </div>
            
            <h2 className={styles.heroTagline}>Study Anytime. Anywhere.</h2>
            
            <div className={styles.heroActions}>
              <button 
                className={styles.enrollButton}
                onClick={handleEnrollClick}
              >
                Enroll Now
              </button>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <div>078 940 5837</div>
                    <div>076 950 5837</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>🌐</span>
                  <div>www.mcsictschool.com</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.graduateImageContainer}>
              <img 
                src="https://images.pexels.com/photos/5940838/pexels-photo-5940838.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                alt="Happy graduate" 
                className={styles.graduateImage}
              />
              <div className={styles.logoOverlay}>
                <div className={styles.logoIcon}>MCS</div>
                <div className={styles.logoText}>School of Computing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
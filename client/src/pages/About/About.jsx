import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>About MCS School of Computing</h1>
          <p className={styles.pageDescription}>
            Empowering students with cutting-edge technology education and professional development
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.sectionText}>
              At MCS School of Computing, we are committed to providing world-class education in information 
              technology and computer science. Our mission is to prepare students for successful careers in 
              the rapidly evolving digital landscape through innovative teaching methods, practical experience, 
              and industry-relevant curricula.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Choose MCS?</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎓</div>
                <h3 className={styles.featureTitle}>Expert Faculty</h3>
                <p className={styles.featureDescription}>
                  Learn from industry professionals with years of experience in technology and education.
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>💻</div>
                <h3 className={styles.featureTitle}>Modern Facilities</h3>
                <p className={styles.featureDescription}>
                  State-of-the-art computer labs and learning environments equipped with the latest technology.
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🚀</div>
                <h3 className={styles.featureTitle}>Career Support</h3>
                <p className={styles.featureDescription}>
                  Comprehensive career guidance and job placement assistance for all graduates.
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🌐</div>
                <h3 className={styles.featureTitle}>Industry Connections</h3>
                <p className={styles.featureDescription}>
                  Strong partnerships with leading technology companies for internships and employment.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Programs</h2>
            <p className={styles.sectionText}>
              We offer a comprehensive range of programs from certificate courses to degree programs, 
              designed to meet the diverse needs of students at different stages of their educational journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
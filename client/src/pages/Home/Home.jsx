import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import EnrollmentForm from '../../components/EnrollmentForm/EnrollmentForm';
import { useToast } from '../../context/ToastContext';
import styles from './Home.module.css';

const featuredCourses = [
  {
    id: 1,
    title: 'Bachelor of Information Technology (BIT)',
    subtitle: 'University of Colombo School of Computing',
    description: 'A comprehensive degree program that prepares students for careers in information technology with strong foundation in computing principles.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'BIT',
    duration: '4 Years',
    level: 'Degree',
    mode: 'Full-time'
  },
  {
    id: 2,
    title: 'Miracle Certified WebApp Developer (MCWD)',
    subtitle: 'Professional Certification',
    description: 'Master modern web development technologies including React, Node.js, and database management for full-stack development.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'MCWD',
    duration: '6 Months',
    level: 'Professional',
    mode: 'Flexible'
  },
  {
    id: 3,
    title: 'Miracle Certified Computerized Accountant (MCCA)',
    subtitle: 'Professional Certification',
    description: 'Learn advanced accounting software and digital financial management tools for modern business environments.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'MCCA',
    duration: '4 Months',
    level: 'Professional',
    mode: 'Part-time'
  }
];

const Home = () => {
  const { addToast } = useToast();

  const handleQuickEnroll = () => {
    addToast('Quick enrollment form opened!', 'success');
  };

  return (
    <div className={styles.home}>
      <HeroBanner />
      
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Featured Courses</h2>
            <p className={styles.sectionDescription}>
              Discover our most popular programs designed to advance your career in technology and business
            </p>
          </div>
          
          <div className={styles.coursesGrid}>
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} compact />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.enrollmentSection}>
        <div className="container">
          <div className={styles.enrollmentBanner}>
            <div className={styles.enrollmentContent}>
              <h2 className={styles.enrollmentTitle}>Ready to Start Your Journey?</h2>
              <p className={styles.enrollmentDescription}>
                Join thousands of students who have advanced their careers with our programs
              </p>
              <div className={styles.enrollmentActions}>
                <button 
                  className={styles.enrollButton}
                  onClick={handleQuickEnroll}
                >
                  Enroll Now
                </button>
                <div className={styles.contactInfo}>
                  <span className={styles.callLabel}>Call Now</span>
                  <span className={styles.phoneNumber}>077 767 5837</span>
                </div>
              </div>
            </div>
            <div className={styles.enrollmentImage}>
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop" 
                alt="Students graduating" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>500+</h3>
              <p className={styles.statLabel}>Graduates</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>15+</h3>
              <p className={styles.statLabel}>Programs</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>10+</h3>
              <p className={styles.statLabel}>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>95%</h3>
              <p className={styles.statLabel}>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentForm />
    </div>
  );
};

export default Home;
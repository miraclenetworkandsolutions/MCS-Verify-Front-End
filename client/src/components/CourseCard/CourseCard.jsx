import React from 'react';
import { useToast } from '../../context/ToastContext';
import styles from './CourseCard.module.css';

const CourseCard = ({ course, compact = false }) => {
  const { addToast } = useToast();

  const handleEnroll = () => {
    addToast(`Enrollment initiated for ${course.title}`, 'success');
  };

  return (
    <div className={`${styles.courseCard} ${compact ? styles.compact : ''}`}>
      <div className={styles.imageContainer}>
        <img src={course.image} alt={course.title} className={styles.image} />
        <div className={styles.badge}>
          <span>{course.code}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>
        {course.subtitle && <p className={styles.subtitle}>{course.subtitle}</p>}
        <p className={styles.description}>{course.description}</p>
        
        <div className={styles.details}>
          {course.duration && (
            <div className={styles.detail}>
              <span className={styles.detailIcon}>📅</span>
              <span>{course.duration}</span>
            </div>
          )}
          {course.level && (
            <div className={styles.detail}>
              <span className={styles.detailIcon}>🎓</span>
              <span>{course.level}</span>
            </div>
          )}
          {course.mode && (
            <div className={styles.detail}>
              <span className={styles.detailIcon}>💻</span>
              <span>{course.mode}</span>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.enrollButton}
            onClick={handleEnroll}
          >
            Enroll Now
          </button>
          <button className={styles.learnMoreButton}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import styles from './EnrollmentForm.module.css';

const courses = [
  'Bachelor of Information Technology (BIT)',
  'Miracle Certified WebApp Developer (MCWD)',
  'Miracle Certified Computerized Accountant (MCCA)',
  'Higher Diploma in Computing',
  'Diploma in Software Engineering',
  'Certificate in Computer Applications',
  'ICT O/L Classes',
  'ICT A/L Classes'
];

const EnrollmentForm = () => {
  const { addToast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      addToast(`Enrollment request submitted for ${formData.course}! We'll contact you soon.`, 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      setIsOpen(false);
    } else {
      addToast('Please correct the errors in the form', 'error');
    }
  };

  if (!isOpen) {
    return (
      <div className={styles.trigger}>
        <button 
          className={styles.openButton}
          onClick={() => setIsOpen(true)}
        >
          <span className={styles.buttonIcon}>📝</span>
          Quick Enrollment
        </button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Quick Enrollment</h2>
          <button 
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Enter your full name"
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="Enter your email address"
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="course" className={styles.label}>
                Select Course *
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className={`${styles.input} ${styles.select} ${errors.course ? styles.inputError : ''}`}
              >
                <option value="">Choose a course...</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              {errors.course && <span className={styles.error}>{errors.course}</span>}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Additional Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Any specific questions or requirements?"
              rows="3"
            />
          </div>

          <div className={styles.formActions}>
            <button 
              type="button" 
              className={styles.cancelButton}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={styles.submitButton}
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EnrollmentForm;
import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import styles from './Contact.module.css';

const Contact = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      addToast('Message sent successfully! We will get back to you soon.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      addToast('Please correct the errors in the form', 'error');
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageDescription}>
            Get in touch with us for admissions, inquiries, or any questions about our programs
          </p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div>
                <h3 className={styles.contactTitle}>Address</h3>
                <p className={styles.contactText}>
                  Spring Field, Galahitiyawa,<br />
                  Kulyapitiya, 60200<br />
                  Sri Lanka
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div>
                <h3 className={styles.contactTitle}>Phone</h3>
                <p className={styles.contactText}>
                  077 767 5837<br />
                  078 940 5837<br />
                  076 950 5837
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div>
                <h3 className={styles.contactTitle}>Email</h3>
                <p className={styles.contactText}>
                  info@mcsictschool.com<br />
                  admissions@mcsictschool.com
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🌐</div>
              <div>
                <h3 className={styles.contactTitle}>Website</h3>
                <p className={styles.contactText}>
                  www.mcsictschool.com
                </p>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h3 className={styles.contactTitle}>Follow Us</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>📘 Facebook</a>
                <a href="#" className={styles.socialLink}>📷 Instagram</a>
                <a href="#" className={styles.socialLink}>📺 YouTube</a>
                <a href="#" className={styles.socialLink}>🐦 Twitter</a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>Send us a Message</h2>
            
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                    placeholder="Enter message subject"
                  />
                  {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Enter your message"
                  rows="6"
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
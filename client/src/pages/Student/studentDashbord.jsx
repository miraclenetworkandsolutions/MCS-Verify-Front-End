import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import './Student.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { user, logout, isStudent } = useAuth();
  const { getStudentCertificates } = useData();
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    if (!isStudent()) {
      navigate('/student/login');
      return;
    }

    if (user) {
      const studentCerts = getStudentCertificates(user.studentId);
      setCertificates(studentCerts);
    }
  }, [user, isStudent, navigate, getStudentCertificates]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="dashboard">
      <div className="container">
        <header className="dashboard-header">
          <div className="header-content">
            <h1>Student Dashboard</h1>
            <div className="header-actions">
              <span className="welcome-text">Welcome, {user.fullName}</span>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="student-info-card">
            <div className="card">
              <h2>Student Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>Full Name:</label>
                  <span>{user.fullName}</span>
                </div>
                <div className="info-item">
                  <label>Student ID:</label>
                  <span>{user.studentId}</span>
                </div>
                <div className="info-item">
                  <label>Email:</label>
                  <span>{user.email}</span>
                </div>
                <div className="info-item">
                  <label>Status:</label>
                  <span className="status-active">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="certificates-section">
            <div className="card">
              <h2>My Certificates</h2>
              {certificates.length > 0 ? (
                <div className="certificates-grid">
                  {certificates.map(cert => (
                    <div key={cert.id} className="certificate-card">
                      <div className="certificate-header">
                        <h3>{cert.courseName}</h3>
                        <span className="certificate-id">{cert.certificateId}</span>
                      </div>
                      <div className="certificate-details">
                        <div className="detail-item">
                          <label>Grade:</label>
                          <span className={`grade ${cert.grade.toLowerCase()}`}>
                            {cert.grade}
                          </span>
                        </div>
                        <div className="detail-item">
                          <label>Date Issued:</label>
                          <span>{cert.dateIssued}</span>
                        </div>
                      </div>
                      <div className="certificate-actions">
                        <button className="btn btn-primary btn-sm">
                          View Certificate
                        </button>
                        <button className="btn btn-secondary btn-sm">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-certificates">
                  <div className="no-certificates-icon">📜</div>
                  <h3>No Certificates Found</h3>
                  <p>You don't have any certificates yet. Complete a course to earn your first certificate!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
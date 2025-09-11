import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import './Admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();
  const { students, certificates, deleteStudent, addCertificate, deleteCertificate } = useData();
  const [activeTab, setActiveTab] = useState('students');
  const [showAddCertificate, setShowAddCertificate] = useState(false);
  const [message, setMessage] = useState('');
  const [newCertificate, setNewCertificate] = useState({
    certificateId: '',
    studentId: '',
    courseName: '',
    dateIssued: '',
    grade: 'Pass'
  });

  useEffect(() => {
    if (!isAdmin()) {
      navigate('/admin/login');
      return;
    }
  }, [isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDeleteStudent = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student? This will also delete all their certificates.')) {
      deleteStudent(studentId);
      setMessage('Student deleted successfully');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleAddCertificate = (e) => {
    e.preventDefault();
    
    if (!newCertificate.certificateId || !newCertificate.studentId || !newCertificate.courseName || !newCertificate.dateIssued) {
      setMessage('Please fill in all required fields');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    // Check if student exists
    const studentExists = students.find(s => s.studentId === newCertificate.studentId);
    if (!studentExists) {
      setMessage('Student ID not found');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    addCertificate(newCertificate);
    setMessage('Certificate added successfully');
    setShowAddCertificate(false);
    setNewCertificate({
      certificateId: '',
      studentId: '',
      courseName: '',
      dateIssued: '',
      grade: 'Pass'
    });
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDeleteCertificate = (certificateId) => {
    if (window.confirm('Are you sure you want to delete this certificate?')) {
      deleteCertificate(certificateId);
      setMessage('Certificate deleted successfully');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const getStudentName = (studentId) => {
    const student = students.find(s => s.studentId === studentId);
    return student ? student.fullName : 'Unknown Student';
  };

  if (!user) {
    return null;
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Admin Panel</h2>
            <p>MCS System</p>
          </div>
          
          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${activeTab === 'students' ? 'active' : ''}`}
              onClick={() => setActiveTab('students')}
            >
              <span className="nav-icon">👥</span>
              Students
            </button>
            <button 
              className={`nav-item ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              <span className="nav-icon">📜</span>
              Certificates
            </button>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="nav-icon">⚙️</span>
              Settings
            </button>
          </nav>

          <div className="sidebar-footer">
            <button onClick={handleLogout} className="btn btn-danger logout-btn">
              <span className="nav-icon">🚪</span>
              Logout
            </button>
          </div>
        </aside>

        <main className="main-content">
          <header className="content-header">
            <h1>
              {activeTab === 'students' && 'Manage Students'}
              {activeTab === 'certificates' && 'Manage Certificates'}
              {activeTab === 'settings' && 'Settings'}
            </h1>
            <div className="admin-info">
              <span>Welcome, {user.email}</span>
            </div>
          </header>

          {message && (
            <div className="alert alert-success">
              {message}
            </div>
          )}

          <div className="content-body">
            {activeTab === 'students' && (
              <div className="students-section">
                <div className="section-header">
                  <h2>All Students ({students.length})</h2>
                </div>
                
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Student ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Certificates</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map(student => (
                        <tr key={student.id}>
                          <td>{student.studentId}</td>
                          <td>{student.fullName}</td>
                          <td>{student.email}</td>
                          <td>
                            {certificates.filter(cert => cert.studentId === student.studentId).length}
                          </td>
                          <td>
                            <button 
                              onClick={() => handleDeleteStudent(student.studentId)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="certificates-section">
                <div className="section-header">
                  <h2>All Certificates ({certificates.length})</h2>
                  <button 
                    onClick={() => setShowAddCertificate(true)}
                    className="btn btn-primary"
                  >
                    Add Certificate
                  </button>
                </div>

                {showAddCertificate && (
                  <div className="add-certificate-form">
                    <div className="card">
                      <h3>Add New Certificate</h3>
                      <form onSubmit={handleAddCertificate}>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Certificate ID</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="e.g., MCS-BIT-2024-003"
                              value={newCertificate.certificateId}
                              onChange={(e) => setNewCertificate({
                                ...newCertificate,
                                certificateId: e.target.value
                              })}
                            />
                          </div>
                          <div className="form-group">
                            <label>Student ID</label>
                            <select
                              className="form-control"
                              value={newCertificate.studentId}
                              onChange={(e) => setNewCertificate({
                                ...newCertificate,
                                studentId: e.target.value
                              })}
                            >
                              <option value="">Select Student</option>
                              {students.map(student => (
                                <option key={student.id} value={student.studentId}>
                                  {student.studentId} - {student.fullName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Course Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="e.g., Bachelor of Information Technology"
                              value={newCertificate.courseName}
                              onChange={(e) => setNewCertificate({
                                ...newCertificate,
                                courseName: e.target.value
                              })}
                            />
                          </div>
                          <div className="form-group">
                            <label>Grade</label>
                            <select
                              className="form-control"
                              value={newCertificate.grade}
                              onChange={(e) => setNewCertificate({
                                ...newCertificate,
                                grade: e.target.value
                              })}
                            >
                              <option value="Pass">Pass</option>
                              <option value="Distinction">Distinction</option>
                              <option value="Merit">Merit</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Date Issued</label>
                          <input
                            type="date"
                            className="form-control"
                            value={newCertificate.dateIssued}
                            onChange={(e) => setNewCertificate({
                              ...newCertificate,
                              dateIssued: e.target.value
                            })}
                          />
                        </div>
                        <div className="form-actions">
                          <button type="submit" className="btn btn-primary">
                            Add Certificate
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setShowAddCertificate(false)}
                            className="btn btn-secondary"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Certificate ID</th>
                        <th>Student</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Date Issued</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificates.map(cert => (
                        <tr key={cert.id}>
                          <td>{cert.certificateId}</td>
                          <td>{getStudentName(cert.studentId)}</td>
                          <td>{cert.courseName}</td>
                          <td>
                            <span className={`grade-badge ${cert.grade.toLowerCase()}`}>
                              {cert.grade}
                            </span>
                          </td>
                          <td>{cert.dateIssued}</td>
                          <td>
                            <button 
                              onClick={() => handleDeleteCertificate(cert.certificateId)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="settings-section">
                <div className="card">
                  <h2>System Settings</h2>
                  <div className="settings-grid">
                    <div className="setting-item">
                      <h3>System Statistics</h3>
                      <div className="stats-grid">
                        <div className="stat-card">
                          <div className="stat-number">{students.length}</div>
                          <div className="stat-label">Total Students</div>
                        </div>
                        <div className="stat-card">
                          <div className="stat-number">{certificates.length}</div>
                          <div className="stat-label">Total Certificates</div>
                        </div>
                        <div className="stat-card">
                          <div className="stat-number">1</div>
                          <div className="stat-label">Active Admins</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="setting-item">
                      <h3>Account Information</h3>
                      <div className="account-info">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> Administrator</p>
                        <p><strong>Last Login:</strong> {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
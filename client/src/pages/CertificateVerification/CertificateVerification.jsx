import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import CertificateModal from '../../components/CertificateModal/CertificateModal';
import styles from './CertificateVerification.module.css';

const CertificateVerification = () => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('certificate');
  const [formData, setFormData] = useState({
    certificateId: '',
    studentId: ''
  });
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerify = async (type) => {
    const value = type === 'certificate' ? formData.certificateId : formData.studentId;
    
    if (!value.trim()) {
      addToast(`Please enter a ${type === 'certificate' ? 'Certificate ID' : 'Student ID'}`, 'error');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      const mockResult = {
        studentName: 'Kalana Champika Deshapriya',
        course: 'Miracle Certified WebApp Developer (MCWD)',
        grade: 'Distinction',
        issueDate: 'March 15, 2025',
        certificateId: 'MCS-MCWD-2025-001',
        studentId: 'MCS-2025-STU-001',
        status: 'Valid',
        institution: 'MCS School of Computing',
        description: 'This certificate confirms the successful completion of the Miracle Certified WebApp Developer program with distinction.',
        duration: '6 Months',
        completionDate: 'March 10, 2025'
      };

      setVerificationResult(mockResult);
      setIsLoading(false);
      addToast('Certificate verified successfully!', 'success');
    }, 2000);
  };

  const handleViewCertificate = () => {
    setShowCertificate(true);
  };

  const handleDownloadCertificate = () => {
    addToast('Certificate download started!', 'success');
  };

  const resetForm = () => {
    setFormData({ certificateId: '', studentId: '' });
    setVerificationResult(null);
  };

  return (
    <div className={styles.verificationPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Global Certificate Verification</h1>
          <p className={styles.pageDescription}>
            Welcome to the Miracle Global Credential Verification site. This fraud prevention system 
            can be used to verify credentials worldwide. The credential identification code can be 
            found on all certificates.
          </p>
        </div>

        <div className={styles.verificationContainer}>
          <div className={styles.verificationCard}>
            <h2 className={styles.cardTitle}>Verify Your Certificate</h2>
            <p className={styles.cardDescription}>
              Upon entering either the <strong>Certificate ID No</strong> or <strong>Student ID No</strong>, 
              authentication details relating to the holder of the credentials will be presented.
            </p>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'certificate' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('certificate')}
              >
                Certificate ID
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'student' ? styles.tabActive : ''}`}
                onClick={() => setActiveTab('student')}
              >
                Student ID
              </button>
            </div>

            <div className={styles.verificationForm}>
              {activeTab === 'certificate' ? (
                <div className={styles.inputSection}>
                  <input
                    type="text"
                    name="certificateId"
                    value={formData.certificateId}
                    onChange={handleInputChange}
                    placeholder="Enter Your Certificate ID"
                    className={styles.verificationInput}
                  />
                  <button
                    onClick={() => handleVerify('certificate')}
                    disabled={isLoading}
                    className={`${styles.verifyButton} ${isLoading ? styles.loading : ''}`}
                  >
                    {isLoading ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              ) : (
                <div className={styles.inputSection}>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    placeholder="Enter Your Student ID"
                    className={styles.verificationInput}
                  />
                  <button
                    onClick={() => handleVerify('student')}
                    disabled={isLoading}
                    className={`${styles.verifyButton} ${isLoading ? styles.loading : ''}`}
                  >
                    {isLoading ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              )}
            </div>

            {isLoading && (
              <div className={styles.loadingSpinner}>
                <div className={styles.spinner}></div>
                <p>Verifying certificate...</p>
              </div>
            )}

            {verificationResult && (
              <div className={styles.results}>
                <div className={styles.resultHeader}>
                  <div className={styles.statusBadge}>
                    <span className={styles.statusIcon}>✓</span>
                    <span>Certificate Verified</span>
                  </div>
                  <button
                    onClick={resetForm}
                    className={styles.newSearchButton}
                  >
                    New Search
                  </button>
                </div>

                <div className={styles.resultDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Student Name:</span>
                    <span className={styles.detailValue}>{verificationResult.studentName}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Course Completed:</span>
                    <span className={styles.detailValue}>{verificationResult.course}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Grade:</span>
                    <span className={styles.detailValue}>{verificationResult.grade}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Issue Date:</span>
                    <span className={styles.detailValue}>{verificationResult.issueDate}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Certificate ID:</span>
                    <span className={styles.detailValue}>{verificationResult.certificateId}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Student ID:</span>
                    <span className={styles.detailValue}>{verificationResult.studentId}</span>
                  </div>
                </div>

                <div className={styles.certificateActions}>
                  <button
                    onClick={handleViewCertificate}
                    className={styles.viewButton}
                  >
                    📋 View Certificate
                  </button>
                  <button
                    onClick={handleDownloadCertificate}
                    className={styles.downloadButton}
                  >
                    💾 Download Certificate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showCertificate && (
        <CertificateModal
          certificateData={verificationResult}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
};

export default CertificateVerification;
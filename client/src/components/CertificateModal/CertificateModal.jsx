import React from 'react';
import styles from './CertificateModal.module.css';

const CertificateModal = ({ certificateData, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real application, this would generate and download a PDF
    const element = document.createElement('a');
    const file = new Blob(['Certificate content would be here'], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${certificateData.certificateId}.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Certificate Preview</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div className={styles.certificate}>
          <div className={styles.certificateHeader}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>MCS</div>
              <div className={styles.logoText}>Miracle Computer School</div>
            </div>
            <div className={styles.certificateTitle}>CERTIFICATE OF COMPLETION</div>
          </div>

          <div className={styles.certificateBody}>
            <div className={styles.certificationText}>
              <p>This is to certify that</p>
              <h3 className={styles.studentName}>{certificateData.studentName}</h3>
              <p>has successfully completed the</p>
              <h4 className={styles.courseName}>{certificateData.course}</h4>
              <p className={styles.description}>{certificateData.description}</p>
            </div>

            <div className={styles.certificateDetails}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Duration:</span>
                <span className={styles.value}>{certificateData.duration}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Completion Date:</span>
                <span className={styles.value}>{certificateData.completionDate}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Grade:</span>
                <span className={styles.value}>{certificateData.grade}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Certificate ID:</span>
                <span className={styles.value}>{certificateData.certificateId}</span>
              </div>
            </div>

            <div className={styles.signatures}>
              <div className={styles.signature}>
                <div className={styles.signatureLine}></div>
                <p>Director</p>
                <p>MCS School of Computing</p>
              </div>
              <div className={styles.seal}>
                <div className={styles.sealIcon}>🏆</div>
                <p>Official Seal</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button onClick={handlePrint} className={styles.printButton}>
            🖨️ Print Certificate
          </button>
          <button onClick={handleDownload} className={styles.downloadButton}>
            💾 Download PDF
          </button>
        </div>
      </div>
    </>
  );
};

export default CertificateModal;
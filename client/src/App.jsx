import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import CertificateVerification from './pages/CertificateVerification/CertificateVerification';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import StudentDashboard from './pages/Student/studentDashbord';
import Toast from './components/Toast/Toast';
import { ToastProvider } from './context/ToastContext';
import styles from './App.module.css';

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className={styles.app}>
          <Navbar />
          <main className={styles.main}>
            <Routes>
             
              <Route path="/courses" element={<Courses />} />
              <Route path="/certificate-verification" element={<CertificateVerification />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
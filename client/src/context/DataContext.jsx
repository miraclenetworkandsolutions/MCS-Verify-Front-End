import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  // Mock admin account
  const [admins] = useState([
    {
      id: 1,
      email: 'admin@mcs.edu',
      password: 'admin123'
    }
  ]);

  // Mock students data
  const [students, setStudents] = useState([
    {
      id: 1,
      studentId: 'MCS2024001',
      fullName: 'John Doe Silva',
      email: 'john@example.com',
      password: 'student123'
    },
    {
      id: 2,
      studentId: 'MCS2024002',
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      password: 'student123'
    }
  ]);

  // Mock certificates data
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      certificateId: 'MCS-BIT-2024-001',
      studentId: 'MCS2024001',
      courseName: 'Bachelor of Information Technology',
      dateIssued: '2024-03-15',
      grade: 'Distinction'
    },
    {
      id: 2,
      certificateId: 'MCS-MCWD-2024-001',
      studentId: 'MCS2024002',
      courseName: 'Miracle Certified WebApp Developer',
      dateIssued: '2024-02-20',
      grade: 'Pass'
    }
  ]);

  // Admin functions
  const authenticateAdmin = (email, password) => {
    return admins.find(admin => admin.email === email && admin.password === password);
  };

  // Student functions
  const authenticateStudent = (studentId, password) => {
    return students.find(student => student.studentId === studentId && student.password === password);
  };

  const registerStudent = (studentData) => {
    const newStudent = {
      id: students.length + 1,
      ...studentData
    };
    setStudents([...students, newStudent]);
    return newStudent;
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter(student => student.studentId !== studentId));
    setCertificates(certificates.filter(cert => cert.studentId !== studentId));
  };

  // Certificate functions
  const verifyCertificate = (certificateId, studentId) => {
    if (certificateId) {
      const cert = certificates.find(cert => cert.certificateId === certificateId);
      if (cert) {
        const student = students.find(s => s.studentId === cert.studentId);
        return { ...cert, studentName: student?.fullName };
      }
    }
    
    if (studentId) {
      const cert = certificates.find(cert => cert.studentId === studentId);
      if (cert) {
        const student = students.find(s => s.studentId === cert.studentId);
        return { ...cert, studentName: student?.fullName };
      }
    }
    
    return null;
  };

  const addCertificate = (certificateData) => {
    const newCertificate = {
      id: certificates.length + 1,
      ...certificateData
    };
    setCertificates([...certificates, newCertificate]);
    return newCertificate;
  };

  const deleteCertificate = (certificateId) => {
    setCertificates(certificates.filter(cert => cert.certificateId !== certificateId));
  };

  const getStudentCertificates = (studentId) => {
    return certificates.filter(cert => cert.studentId === studentId);
  };

  return (
    <DataContext.Provider value={{
      students,
      certificates,
      authenticateAdmin,
      authenticateStudent,
      registerStudent,
      deleteStudent,
      verifyCertificate,
      addCertificate,
      deleteCertificate,
      getStudentCertificates
    }}>
      {children}
    </DataContext.Provider>
  );
};
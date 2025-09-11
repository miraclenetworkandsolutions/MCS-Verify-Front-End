import React, { useState } from 'react';
import { User, Mail, Phone, BookOpen, Calendar, MapPin, FileText } from 'lucide-react';

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    course: '',
    previousEducation: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [showRegistration, setShowRegistration] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Registration Data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowRegistration(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        course: '',
        previousEducation: '',
        emergencyContact: '',
        emergencyPhone: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform animate-pulse">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
          <p className="text-gray-600">Thank you for registering with MCS. We'll contact you soon with further details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 text-white p-2 rounded-lg font-bold text-xl">
                MCS
              </div>
              <h1 className="text-white text-xl font-semibold">Miracle Computer School</h1>
            </div>
            <nav className="hidden md:flex space-x-6 text-white">
              <a href="#" className="hover:text-orange-300 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Courses</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Verify Certificate</a>
              <a href="#" className="hover:text-orange-300 transition-colors">About Us</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showRegistration ? (
          // Landing Section with Registration Button
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to MCS</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Join our community of learners and advance your career with our comprehensive computer education programs. 
                  Start your journey towards excellence in technology today.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Quality Education</h3>
                  <p className="text-sm text-gray-600">Industry-standard curriculum</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <User className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Expert Instructors</h3>
                  <p className="text-sm text-gray-600">Learn from professionals</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Certification</h3>
                  <p className="text-sm text-gray-600">Recognized certificates</p>
                </div>
              </div>

              <button
                onClick={() => setShowRegistration(true)}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center mx-auto space-x-2"
              >
                <User className="w-5 h-5" />
                <span>Student Registration</span>
              </button>
            </div>
          </div>
        ) : (
          // Registration Form
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">Student Registration Form</h2>
                <p className="text-purple-100 mt-2">Please fill in all the required information</p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="077 123 4567"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <BookOpen className="w-4 h-4 inline mr-2" />
                      Course Selection *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a course</option>
                      <option value="diploma">Diploma Programs</option>
                      <option value="certificate">Certificate Programs</option>
                      <option value="professional">Professional Certification</option>
                      <option value="ict-ol">ICT O/L</option>
                      <option value="ict-al">ICT A/L</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Enter your full address"
                    />
                  </div>

                  {/* Previous Education */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Previous Education
                    </label>
                    <input
                      type="text"
                      name="previousEducation"
                      value={formData.previousEducation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="e.g., GCE O/L, A/L, Degree"
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Emergency contact person"
                    />
                  </div>

                  {/* Emergency Phone */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Emergency contact phone number"
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setShowRegistration(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back to Home
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Submit Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Miracle Computer School</h3>
              <p className="text-purple-200 text-sm">
                Spring Field, Galathiyawa, Kulyapitiya, 60200
              </p>
              <p className="text-purple-200 text-sm mt-2">077 767 5637</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programmes</h4>
              <ul className="space-y-2 text-sm text-purple-200">
                <li>Degree Programmes</li>
                <li>Higher Diploma</li>
                <li>Diplomas</li>
                <li>Certificate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Menu</h4>
              <ul className="space-y-2 text-sm text-purple-200">
                <li>Courses</li>
                <li>Publication</li>
                <li>News and Events</li>
                <li>Gallery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Latest News</h4>
              <div className="text-sm text-purple-200">
                <p>2024 AI ICT - Pidarangala Trip</p>
                <p className="text-xs mt-1">December 2024</p>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-600 mt-8 pt-4 text-center text-sm text-purple-200">
            © Copyright 2025 MCS School of Computing | All Rights Reserved | Powered by Miracle Network & Solutions (Pvt) Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentRegistration;
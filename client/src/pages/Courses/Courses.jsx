import React, { useState, useMemo } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import styles from './Courses.module.css';

const allCourses = [
  {
    id: 1,
    title: 'Bachelor of Information Technology (BIT)',
    subtitle: 'University of Colombo School of Computing',
    description: 'A comprehensive degree program that prepares students for careers in information technology with strong foundation in computing principles, software development, and system analysis.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'BIT',
    duration: '4 Years',
    level: 'Degree',
    mode: 'Full-time',
    category: 'degree'
  },
  {
    id: 2,
    title: 'Miracle Certified WebApp Developer (MCWD)',
    subtitle: 'Professional Certification',
    description: 'Master modern web development technologies including React, Node.js, MongoDB, and database management for full-stack development career opportunities.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'MCWD',
    duration: '6 Months',
    level: 'Professional',
    mode: 'Flexible',
    category: 'certificate'
  },
  {
    id: 3,
    title: 'Miracle Certified Computerized Accountant (MCCA)',
    subtitle: 'Professional Certification',
    description: 'Learn advanced accounting software including QuickBooks, SAP, and digital financial management tools for modern business accounting environments.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'MCCA',
    duration: '4 Months',
    level: 'Professional',
    mode: 'Part-time',
    category: 'certificate'
  },
  {
    id: 4,
    title: 'Higher Diploma in Computing',
    subtitle: 'Advanced Diploma Program',
    description: 'Comprehensive computing program covering software engineering, database systems, networking, and project management for IT professionals.',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'HDC',
    duration: '2 Years',
    level: 'Diploma',
    mode: 'Full-time',
    category: 'diploma'
  },
  {
    id: 5,
    title: 'Diploma in Software Engineering',
    subtitle: 'Software Development Program',
    description: 'Focus on software development lifecycle, programming languages, testing methodologies, and project management in software engineering.',
    image: 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'DSE',
    duration: '18 Months',
    level: 'Diploma',
    mode: 'Full-time',
    category: 'diploma'
  },
  {
    id: 6,
    title: 'Certificate in Computer Applications',
    subtitle: 'Basic Computing Skills',
    description: 'Essential computer skills including Microsoft Office, internet usage, basic programming concepts, and digital literacy for beginners.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'CCA',
    duration: '3 Months',
    level: 'Certificate',
    mode: 'Part-time',
    category: 'certificate'
  },
  {
    id: 7,
    title: 'ICT O/L Classes',
    subtitle: 'Ordinary Level ICT',
    description: 'Complete preparation for GCE Ordinary Level ICT examination with practical sessions and comprehensive theory coverage.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'ICT-OL',
    duration: '1 Year',
    level: 'O/L',
    mode: 'Part-time',
    category: 'grade-classes'
  },
  {
    id: 8,
    title: 'ICT A/L Classes',
    subtitle: 'Advanced Level ICT',
    description: 'Advanced preparation for GCE Advanced Level ICT examination including programming, database management, and system analysis.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'ICT-AL',
    duration: '2 Years',
    level: 'A/L',
    mode: 'Part-time',
    category: 'grade-classes'
  },
  {
    id: 9,
    title: 'Diploma in Network Administration',
    subtitle: 'Network Management Program',
    description: 'Learn network setup, configuration, security, and management including Cisco networking technologies and server administration.',
    image: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    code: 'DNA',
    duration: '12 Months',
    level: 'Diploma',
    mode: 'Full-time',
    category: 'diploma'
  }
];

const categories = [
  { value: 'all', label: 'All Courses' },
  { value: 'degree', label: 'Degree Programs' },
  { value: 'diploma', label: 'Diplomas' },
  { value: 'certificate', label: 'Certificates' },
  { value: 'grade-classes', label: 'Grade Classes' }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = allCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.code.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'level':
          return a.level.localeCompare(b.level);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className={styles.coursesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Our Courses</h1>
          <p className={styles.pageDescription}>
            Explore our comprehensive range of courses designed to advance your career in technology and business
          </p>
        </div>

        <div className={styles.filters}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>🔍</span>
          </div>

          <div className={styles.filterRow}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.filterSelect}
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="title">Sort by Name</option>
              <option value="duration">Sort by Duration</option>
              <option value="level">Sort by Level</option>
            </select>
          </div>
        </div>

        <div className={styles.resultsInfo}>
          <p>{filteredAndSortedCourses.length} course{filteredAndSortedCourses.length !== 1 ? 's' : ''} found</p>
        </div>

        <div className={styles.coursesGrid}>
          {filteredAndSortedCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredAndSortedCourses.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>📚</div>
            <h3 className={styles.noResultsTitle}>No courses found</h3>
            <p className={styles.noResultsText}>
              Try adjusting your search terms or filters to find the course you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
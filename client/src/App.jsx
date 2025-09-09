import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
//import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Publication from "./pages/Publication";
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VLS from "./pages/VLS";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vls" element={<VLS />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

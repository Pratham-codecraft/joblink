import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import JobListings from './JobListings.jsx';
import TrainingCourses from './TrainingCourses.jsx';
import PlansPricing from './PlansPricing.jsx';
import Blog from './Blog.jsx';
import About from './About.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/training-courses" element={<TrainingCourses />} />
          <Route path="/plans-pricing" element={<PlansPricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
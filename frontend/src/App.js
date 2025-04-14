import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import JobListings from './JobListings.jsx';
import TrainingCourses from './TrainingCourses.jsx';
import PlansPricing from './PlansPricing.jsx';
import Blog from './Blog.jsx';
import About from './About.jsx';
import EventDetail from './EventDetail.jsx';
import Footer from './Footer.jsx';
import Login from './Login';
import Register from './Register';
import BecomeMentor from './BecomeMentor.jsx';
import FindMentor from './FindMentor.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-listings" element={<JobListings />} />
            <Route path="/training-courses" element={<TrainingCourses />} />
            <Route path="/plans-pricing" element={<PlansPricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/event/:eventId" element={<EventDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            <Route path="/find-mentor" element={<FindMentor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
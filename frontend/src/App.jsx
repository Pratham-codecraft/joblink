// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import JobListings from "./components/JobListings";
import Training from "./components/Training";
import Plans from "./components/Plans";
import Blog from "./components/Blog";
import About from "./components/About";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
          <h1 className="text-white italic text-xl font-bold">Joblink</h1>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-cyan-300">Home</Link>
            <Link to="/jobs" className="hover:text-cyan-300">Job listings</Link>
            <Link to="/training" className="hover:text-cyan-300">Training & Courses</Link>
            <Link to="/plans" className="hover:text-cyan-300">Plans & Pricing</Link>
            <Link to="/blog" className="hover:text-cyan-300">Blog</Link>
            <Link to="/about" className="hover:text-cyan-300">About</Link>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Type here to Search....."
              className="px-3 py-1 text-black rounded-md"
            />
            <button className="bg-white text-black px-2 py-1 rounded">🔍</button>
            <button className="text-cyan-300 hover:underline">Log In</button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/training" element={<Training />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

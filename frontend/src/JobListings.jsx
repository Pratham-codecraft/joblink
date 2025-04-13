import React, { useState, useEffect } from 'react';
import './index.css';

const JobListings = () => {
  // Sample job listings data - 30 IT industry jobs
  const initialJobs = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'TechSolutions India',
      location: 'Bangalore',
      experience: '2-5 years',
      salary: '₹ 8,00,000 - 12,00,000',
      postedAgo: '2 days ago'
    },
    {
      id: 2,
      title: 'Frontend React Developer',
      company: 'Webify Technologies',
      location: 'Pune',
      experience: '1-3 years',
      salary: '₹ 6,00,000 - 9,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudNine Solutions',
      location: 'Mumbai',
      experience: '3-5 years',
      salary: '₹ 12,00,000 - 18,00,000',
      postedAgo: '3 days ago'
    },
    {
      id: 4,
      title: 'Junior Python Developer',
      company: 'DataMinds Analytics',
      location: 'Delhi',
      experience: '0-2 years',
      salary: '₹ 3,50,000 - 5,00,000',
      postedAgo: '2 weeks ago'
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Insights AI',
      location: 'Hyderabad',
      experience: '2-4 years',
      salary: '₹ 10,00,000 - 15,00,000',
      postedAgo: '5 days ago'
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      company: 'Creative Pixels',
      location: 'Mumbai',
      experience: '1-3 years',
      salary: '₹ 5,00,000 - 8,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 7,
      title: 'Java Backend Developer',
      company: 'Enterprise Solutions',
      location: 'Bangalore',
      experience: '3-6 years',
      salary: '₹ 9,00,000 - 14,00,000',
      postedAgo: '4 days ago'
    },
    {
      id: 8,
      title: 'Mobile App Developer (iOS)',
      company: 'AppCraft Studios',
      location: 'Pune',
      experience: '2-4 years',
      salary: '₹ 7,00,000 - 12,00,000',
      postedAgo: '6 days ago'
    },
    {
      id: 9,
      title: 'QA Test Engineer',
      company: 'Quality Assurance Tech',
      location: 'Gurgaon',
      experience: '1-3 years',
      salary: '₹ 4,50,000 - 7,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 10,
      title: 'Cloud Solutions Architect',
      company: 'CloudWays Technologies',
      location: 'Hyderabad',
      experience: '5-8 years',
      salary: '₹ 18,00,000 - 25,00,000',
      postedAgo: '3 days ago'
    },
    {
      id: 11,
      title: 'Machine Learning Engineer',
      company: 'AI Innovations',
      location: 'Bangalore',
      experience: '2-5 years',
      salary: '₹ 12,00,000 - 18,00,000',
      postedAgo: '5 days ago'
    },
    {
      id: 12,
      title: 'Cyber Security Analyst',
      company: 'SecureNet Solutions',
      location: 'Delhi',
      experience: '3-6 years',
      salary: '₹ 10,00,000 - 16,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 13,
      title: 'Node.js Developer',
      company: 'WebStack Technologies',
      location: 'Mumbai',
      experience: '2-4 years',
      salary: '₹ 7,00,000 - 11,00,000',
      postedAgo: '4 days ago'
    },
    {
      id: 14,
      title: 'Blockchain Developer',
      company: 'FutureTech Solutions',
      location: 'Pune',
      experience: '2-5 years',
      salary: '₹ 12,00,000 - 20,00,000',
      postedAgo: '2 weeks ago'
    },
    {
      id: 15,
      title: 'Technical Support Engineer',
      company: 'SupportHub Services',
      location: 'Chennai',
      experience: '0-2 years',
      salary: '₹ 3,00,000 - 5,00,000',
      postedAgo: '3 days ago'
    },
    {
      id: 16,
      title: 'React Native Developer',
      company: 'MobileFusion Apps',
      location: 'Bangalore',
      experience: '1-4 years',
      salary: '₹ 6,00,000 - 10,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 17,
      title: 'Database Administrator',
      company: 'DataCore Systems',
      location: 'Hyderabad',
      experience: '3-6 years',
      salary: '₹ 8,00,000 - 14,00,000',
      postedAgo: '5 days ago'
    },
    {
      id: 18,
      title: 'Product Manager (Tech)',
      company: 'InnovateX',
      location: 'Mumbai',
      experience: '4-7 years',
      salary: '₹ 15,00,000 - 22,00,000',
      postedAgo: '3 days ago'
    },
    {
      id: 19,
      title: 'Angular Developer',
      company: 'FrontTier Solutions',
      location: 'Gurgaon',
      experience: '2-4 years',
      salary: '₹ 7,00,000 - 12,00,000',
      postedAgo: '2 weeks ago'
    },
    {
      id: 20,
      title: 'Backend .NET Developer',
      company: 'Enterprise Systems',
      location: 'Pune',
      experience: '3-5 years',
      salary: '₹ 8,00,000 - 13,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 21,
      title: 'Big Data Engineer',
      company: 'DataStream Analytics',
      location: 'Bangalore',
      experience: '2-5 years',
      salary: '₹ 10,00,000 - 16,00,000',
      postedAgo: '4 days ago'
    },
    {
      id: 22,
      title: 'Network Security Engineer',
      company: 'NetShield Systems',
      location: 'Delhi',
      experience: '3-6 years',
      salary: '₹ 9,00,000 - 15,00,000',
      postedAgo: '6 days ago'
    },
    {
      id: 23,
      title: 'Ruby on Rails Developer',
      company: 'WebForge Technologies',
      location: 'Mumbai',
      experience: '2-4 years',
      salary: '₹ 6,00,000 - 10,00,000',
      postedAgo: '2 weeks ago'
    },
    {
      id: 24,
      title: 'Technical Project Lead',
      company: 'Project Nexus',
      location: 'Hyderabad',
      experience: '5-8 years',
      salary: '₹ 14,00,000 - 20,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 25,
      title: 'Android Developer',
      company: 'MobileEdge Solutions',
      location: 'Pune',
      experience: '1-4 years',
      salary: '₹ 6,00,000 - 11,00,000',
      postedAgo: '5 days ago'
    },
    {
      id: 26,
      title: 'Systems Analyst',
      company: 'TechAnalytica',
      location: 'Chennai',
      experience: '2-5 years',
      salary: '₹ 7,00,000 - 12,00,000',
      postedAgo: '3 days ago'
    },
    {
      id: 27,
      title: 'AWS Cloud Engineer',
      company: 'CloudTech Solutions',
      location: 'Bangalore',
      experience: '3-5 years',
      salary: '₹ 10,00,000 - 15,00,000',
      postedAgo: '1 week ago'
    },
    {
      id: 28,
      title: 'Game Developer (Unity)',
      company: 'GameCraft Studios',
      location: 'Gurgaon',
      experience: '2-4 years',
      salary: '₹ 8,00,000 - 13,00,000',
      postedAgo: '4 days ago'
    },
    {
      id: 29,
      title: 'AI Research Scientist',
      company: 'NextGen AI Research',
      location: 'Hyderabad',
      experience: '4-8 years',
      salary: '₹ 15,00,000 - 25,00,000',
      postedAgo: '2 weeks ago'
    },
    {
      id: 30,
      title: 'IoT Solutions Developer',
      company: 'ConnectedTech',
      location: 'Mumbai',
      experience: '2-5 years',
      salary: '₹ 9,00,000 - 14,00,000',
      postedAgo: '1 week ago'
    }
  ];

  const [jobs] = useState(initialJobs);

  // States for filters
  const [locationFilter, setLocationFilter] = useState('');
  const [ctcFilter, setCtcFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Unique values for filters
  const locations = [...new Set(jobs.map(job => job.location))];
  const salaryRanges = [...new Set(jobs.map(job => job.salary))];
  const experienceRanges = [...new Set(jobs.map(job => job.experience))];

  // Filter jobs when filters change
  useEffect(() => {
    let result = jobs;
    
    if (locationFilter) {
      result = result.filter(job => job.location === locationFilter);
    }
    
    if (ctcFilter) {
      result = result.filter(job => job.salary === ctcFilter);
    }
    
    if (experienceFilter) {
      result = result.filter(job => job.experience === experienceFilter);
    }
    
    setFilteredJobs(result);
  }, [locationFilter, ctcFilter, experienceFilter, jobs]);

  return (
    <div className="job-listings-container">
      {/* Filter section */}
      <div className="filters-section">
        <div className="filter-group">
          <p>Filter by Location</p>
          <select 
            value={locationFilter} 
            onChange={(e) => setLocationFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <p>Filter by CTC</p>
          <select 
            value={ctcFilter} 
            onChange={(e) => setCtcFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="">Select CTC</option>
            {salaryRanges.map((salary, index) => (
              <option key={index} value={salary}>{salary}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <p>Filter by experience</p>
          <select 
            value={experienceFilter} 
            onChange={(e) => setExperienceFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="">Select years of experience</option>
            {experienceRanges.map((exp, index) => (
              <option key={index} value={exp}>{exp}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Job cards grid */}
      <div className="job-cards-grid">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h2 className="job-title">{job.title}</h2>
              <p className="company-name">{job.company}</p>
            </div>
            
            <div className="job-details">
              <div className="experience-badge">
                {job.experience}
              </div>
              <div className="salary-badge">
                {job.salary}
              </div>
            </div>
            
            <div className="location-container">
              <div className="location-badge">
              {job.location}
              </div>
            </div>
            
            <div className="apply-container">
              <button className="apply-button">Apply ›</button>
              <span className="posted-time">{job.postedAgo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
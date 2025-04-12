import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/training-courses');
  };
  const handleEventDetailsClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <>
      <div className="home-container">
        <div className="main-banner">
          <img 
            src="https://static.wixstatic.com/media/11062b_a2e7454be04546fe9ed5344c07c98e40~mv2.jpg/v1/fill/w_1661,h_1035,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_a2e7454be04546fe9ed5344c07c98e40~mv2.jpg" 
            alt="Future Ready" 
            className="main-image"
          />
          <div className="banner-text">
            <h1 className="banner-title">Future Ready</h1>
            <h2 className="banner-subtitle">Unlock Opportunities</h2>
          </div>
        </div>
        
        <div className="side-content">
          <div className="small-image-container">
            <img 
              src="https://static.wixstatic.com/media/11062b_aee05e9b72894b4ca343dd1fde3fc08f~mv2.jpg/v1/fill/w_303,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_aee05e9b72894b4ca343dd1fde3fc08f~mv2.jpg" 
              alt="People talking" 
              className="small-image"
            />
          </div>
          
          <button className="discover-btn" onClick={handleDiscoverClick}>
            Discover
          </button>
        </div>
      </div>

      <div className="featured-courses-section">
        <div className="featured-courses-header">
          <h2>Featured Courses</h2>
          <p>Discover a wide range of expertly designed courses to elevate your skills and advance your career</p>
        </div>
        
        <div className="courses-carousel-container">
          <button className="carousel-btn prev-btn" onClick={() => document.getElementById('courses-carousel').scrollBy({left: -300, behavior: 'smooth'})}>
            <span>&#10094;</span>
          </button>
          
          <div className="courses-carousel" id="courses-carousel">
            {/* Course 1 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_14ba2c93eeb94a3f8d9660471d27d8b2~mv2.jpg/v1/fill/w_403,h_403,al_c,lg_1,q_80,enc_avif,quality_auto/6aa0b2_14ba2c93eeb94a3f8d9660471d27d8b2~mv2.jpg" alt="Web Development" className="course-image" />
              </div>
              <div className="course-info">
                <h3>Web Development(0-100)</h3>
                <p className="course-price"><span className="original-price">₹999.00</span> ₹749.25</p>
              </div>
            </div>
            
            {/* Course 2 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_b57e8641ef254d72bf4c7a38fe6df154~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_b57e8641ef254d72bf4c7a38fe6df154~mv2.jpg" alt="AI and ML" className="course-image" />
                <div className="download-icon">
                  <span>&#8595;</span>
                </div>
              </div>
              <div className="course-info">
                <h3>Artificial Intelligence and machine learning</h3>
                <p className="course-price"><span className="original-price">₹499.00</span> ₹374.25</p>
              </div>
            </div>
            
            {/* Course 3 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_3240f42ed96c40e0b09d36e74f3a268a~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_3240f42ed96c40e0b09d36e74f3a268a~mv2.jpg" alt="CyberSecurity" className="course-image" />
                <div className="download-icon">
                  <span>&#8595;</span>
                </div>
              </div>
              <div className="course-info">
                <h3>CyberSecurity</h3>
                <p className="course-price"><span className="original-price">₹999.00</span> ₹899.10</p>
              </div>
            </div>
            
            {/* Course 4 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_dee40c023b484aefaebd6d608cb63e91~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_dee40c023b484aefaebd6d608cb63e91~mv2.jpg" alt="Data Analytics" className="course-image" />
              </div>
              <div className="course-info">
                <h3>Data Analytics</h3>
                <p className="course-price"><span className="original-price">₹499.00</span> ₹449.10</p>
              </div>
            </div>
            
            {/* Additional courses */}
            {/* Course 5 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_57e99951a1fc4a488e51be54bbce95ce~mv2.jpeg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_57e99951a1fc4a488e51be54bbce95ce~mv2.jpeg" alt="Digital Marketing" className="course-image" />
              </div>
              <div className="course-info">
                <h3>Digital Marketing</h3>
                <p className="course-price"><span className="original-price">₹799.00</span> ₹699.25</p>
              </div>
            </div>
            
            {/* Course 6 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_11874f01bc6242cf99efce7417e74c8d~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_11874f01bc6242cf99efce7417e74c8d~mv2.jpg" alt="Ethical Hacking" className="course-image" />
              </div>
              <div className="course-info">
                <h3>Ethical Hacking</h3>
                <p className="course-price"><span className="original-price">₹699.00</span> ₹599.25</p>
              </div>
            </div>
             {/* Course 7 */}
             <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_bdd5c3dc79dc4a21a23831d60b361862~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_bdd5c3dc79dc4a21a23831d60b361862~mv2.jpg" alt="Project Management" className="course-image" />
              </div>
              <div className="course-info">
                <h3>Cloud computing</h3>
                <p className="course-price"><span className="original-price">₹899.00</span> ₹799.10</p>
              </div>
            </div>
            
            {/* Course 8 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_c54adb23065d48abb6dab5e3d0c790e0~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_c54adb23065d48abb6dab5e3d0c790e0~mv2.jpg" alt="Cloud Computing" className="course-image" />
              </div>
              <div className="course-info">
                <h3>AWS</h3>
                <p className="course-price"><span className="original-price">₹799.00</span> ₹699.10</p>
              </div>
            </div>
            
            {/* Course 9 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_88b52cf0bafd42e99282ea48db7579f7~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_88b52cf0bafd42e99282ea48db7579f7~mv2.png" alt="Blockchain Development" className="course-image" />
              </div>
              <div className="course-info">
                <h3>Git hub</h3>
                <p className="course-price"><span className="original-price">₹899.00</span> ₹799.25</p>
              </div>
            </div>
            
            {/* Course 10 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_972fe5d254114ec7b52ee89f48494ad0~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_972fe5d254114ec7b52ee89f48494ad0~mv2.jpg" alt="Mobile App Development" className="course-image" />
              </div>
              <div className="course-info">
                <h3>Learn Git</h3>
                <p className="course-price"><span className="original-price">₹799.00</span> ₹699.25</p>
              </div>
            </div>
            
            {/* Course 11 */}
            <div className="course-card">
              <div className="course-image-container">
                <img src="https://static.wixstatic.com/media/6aa0b2_0864051edd704473a72511955ad27014~mv2.jpg/v1/fill/w_174,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6aa0b2_0864051edd704473a72511955ad27014~mv2.jpg" alt="DevOps" className="course-image" />
              </div>
              <div className="course-info">
                <h3>NLP and Deep Learning</h3>
                <p className="course-price"><span className="original-price">₹899.00</span> ₹799.10</p>
              </div>
            </div>
          </div>
          
          <button className="carousel-btn next-btn" onClick={() => document.getElementById('courses-carousel').scrollBy({left: 300, behavior: 'smooth'})}>
            <span>&#10095;</span>
          </button>
        </div>
      </div>

      {/* Updated "Learn & Level Up" section */}
      <div className="level-up-section" id="level-up-section2">
        <div className="level-up-container">
          <div className="level-up-image-container">
            
            <img 
              src="https://static.wixstatic.com/media/6aa0b2_2435463dee68466ea3765be4e93d6eba~mv2.png" 
              alt="Student learning" 
              className="level-up-student-image"
            />
          </div>
          <div className="level-up-content">
            <h2 className="level-up-title">Learn &<br />Level Up your skills</h2>
            <p className="level-up-description">Select from a wide range of courses to upskill and advance your career</p>
            <div className="level-up-features">
              <div className="feature">⭐ 50+ courses</div>
              <div className="feature">⭐ Certificate</div>
              <div className="feature">⭐ Project and Assignments</div>
            </div>
            <button className="explore-courses-btn" onClick={() => navigate('/training-courses')}>
              Explore Courses <span>→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="featured-opportunities-section">
        <div className="featured-opportunities-header">
          <h2>Featured Opportunities</h2>
          <p>Check out the curated opportunities handpicked for you from top organizations</p>
        </div>
        
        <div className="opportunities-grid">
          {/* Career Development Workshop */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_23205382252c43eca084c99e90e76b9f~mv2.png/v1/fill/w_335,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/6aa0b2_23205382252c43eca084c99e90e76b9f~mv2.png" 
                alt="Career Development Workshop" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Career Development Workshop</h3>
              <p className="opportunity-date">Aug 31, 2025, 9:54 PM – 11:54 PM</p>
              <p className="opportunity-location">Global Career Hub</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('career-development-workshop')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('career-development-workshop')}>Details</button>
            </div>
          </div>
          
          {/* Vocational Training Expo */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_1f2be97d97a940c396e7e73bd8f903aa~mv2.png/v1/fill/w_335,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/6aa0b2_1f2be97d97a940c396e7e73bd8f903aa~mv2.png" 
                alt="Vocational Training Expo" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Vocational Training Expo</h3>
              <p className="opportunity-date">Aug 31, 2025, 9:54 PM – 11:54 PM</p>
              <p className="opportunity-location">Career Development Institute</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('vocational-training-expo')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('vocational-training-expo')}>Details</button>
            </div>
          </div>
          
          {/* Career Exploration Conference */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_d2468043cd904bc49f495df14a146a8b~mv2.png/v1/fill/w_335,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/6aa0b2_d2468043cd904bc49f495df14a146a8b~mv2.png" 
                alt="Career Exploration Conference" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Career Exploration Conference</h3>
              <p className="opportunity-date">Aug 31, 2025, 9:53 PM – 11:53 PM</p>
              <p className="opportunity-location">Global Career Hub, Main St, Nashua, NH, USA</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('career-exploration-conference')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('career-exploration-conference')}>Details</button>
            </div>
          </div>
          
          {/* Job Search Strategies */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_a533dfd2952f41d4bf780aea2881a93b~mv2.png/v1/fill/w_335,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/6aa0b2_a533dfd2952f41d4bf780aea2881a93b~mv2.png" 
                alt="Job Search Strategies" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Job Search Strategies</h3>
              <p className="opportunity-date">Sep 10, 2025, 1:00 PM – 3:00 PM</p>
              <p className="opportunity-location">Virtual Event</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('job-search-strategies')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('job-search-strategies')}>Details</button>
            </div>
          </div>
          
          {/* Tech Networking Event */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_18c7374accc54e74a3fee08713986c61~mv2.png/v1/fill/w_335,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/6aa0b2_18c7374accc54e74a3fee08713986c61~mv2.png" 
                alt="Tech Networking Event" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Tech Networking Event</h3>
              <p className="opportunity-date">Sep 15, 2025, 6:00 PM – 9:00 PM</p>
              <p className="opportunity-location">Innovation Hub, Boston</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('tech-networking-event')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('tech-networking-event')}>Details</button>
            </div>
          </div>
          
          {/* Resume Building Workshop */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_b06b3bc459f34992a5605cf8197fbcc4~mv2.png/v1/fill/w_335,h_188,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/6aa0b2_b06b3bc459f34992a5605cf8197fbcc4~mv2.png" 
                alt="Resume Building Workshop" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Resume Building Workshop</h3>
              <p className="opportunity-date">Sep 20, 2025, 10:00 AM – 12:00 PM</p>
              <p className="opportunity-location">Career Center</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('resume-building-workshop')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('resume-building-workshop')}>Details</button>
            </div>
          </div>
          
          {/* FAME 4.0 */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_4d09f4b1e0e34014aa98cc9f1ef95f63~mv2.webp/v1/fill/w_335,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6aa0b2_4d09f4b1e0e34014aa98cc9f1ef95f63~mv2.webp" 
                alt="Leadership Seminar" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>FAME 4.0</h3>
              <p className="opportunity-date">Sep 25, 2025, 2:00 PM – 5:00 PM</p>
              <p className="opportunity-location">Pune, AXIS BANK, SERVANTS OF INDIAN SOCIETY EDUCATIONAL INSTITUTION, Shivajinagar, Pune, Maharashtra 411004, India</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('fame-4')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('fame-4')}>Details</button>
            </div>
          </div>
          
          {/* Flipkart Grid 6.0 */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_73787546d15a4b27877c6495569d32ab~mv2.webp/v1/fill/w_335,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6aa0b2_73787546d15a4b27877c6495569d32ab~mv2.webp" 
                alt="Entrepreneurship Workshop" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Flipkart Grid 6.0</h3>
              <p className="opportunity-date">Oct 5, 2025, 9:00 AM – 4:00 PM</p>
              <p className="opportunity-location">Coding Test</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('flipkart-grid-6')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('flipkart-grid-6')}>Details</button>
            </div>
          </div>
          
          {/* Ace Case Competitions */}
          <div className="opportunity-card">
            <div className="opportunity-image-container">
              <img 
                src="https://static.wixstatic.com/media/6aa0b2_2be2283765c045f1b8128bea3b9a461e~mv2.webp/v1/fill/w_335,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6aa0b2_2be2283765c045f1b8128bea3b9a461e~mv2.webp" 
                alt="Industry Insights Panel" 
                className="opportunity-image"
              />
            </div>
            <div className="opportunity-info">
              <h3>Ace Case Competitions</h3>
              <p className="opportunity-date">Oct 12, 2025, 11:00 AM – 1:00 PM</p>
              <p className="opportunity-location">Webinar</p>
              <p className="opportunity-more" onClick={() => handleEventDetailsClick('ace-case-competitions')}>More info</p>
              <button className="details-btn" onClick={() => handleEventDetailsClick('ace-case-competitions')}>Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* clients section */}
      <div className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title">Working With the<br />Best Clients and<br />Recruiters.</h2>
          
          <div className="clients-grid">
            <div className="client-logo">
              <img src="https://static.wixstatic.com/media/6aa0b2_79c225a27b7f4edb80c8a8355c3e54df~mv2.jpg/v1/fill/w_204,h_207,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/google.jpg" alt="Google" />
            </div>
            <div className="client-logo">
              <img src="https://static.wixstatic.com/media/6aa0b2_a9aa9aff93144d8789eaa3628e227d74~mv2.webp/v1/fill/w_204,h_202,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/flipkartphoto.webp" alt="Flipkart" />
            </div>
            <div className="client-logo">
              <img src="https://static.wixstatic.com/media/6aa0b2_dd794bca5fad4596a9973bd5f480e937~mv2.jpg/v1/fill/w_188,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/amazon_edited.jpg" alt="Amazon" />
            </div>
            <div className="client-logo">
              <img src="https://static.wixstatic.com/media/6aa0b2_ba37e856047c450c9039f7619e462928~mv2.jpg/v1/fill/w_204,h_207,al_c,lg_1,q_80,enc_avif,quality_auto/microsoft.jpg" alt="Microsoft" />
            </div>
            <div className="client-logo">
              <img src="https://static.wixstatic.com/media/6aa0b2_16e4a49d71144782a6e1942b52608948~mv2.jpg/v1/fill/w_156,h_156,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/facebook_edited.jpg" alt="Facebook" />
            </div>
            <div className="client-logo">
              <img src="https://static.wixstatic.com/media/6aa0b2_ec9938b4adb34f8ea045950aac51e566~mv2.jpeg/v1/fill/w_204,h_207,al_c,lg_1,q_80,enc_avif,quality_auto/pwc.jpeg" alt="PWC" />
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Mentor Support Section */}
      <div className="mentor-support-section">
        <div className="mentor-support-container">
          <div className="mentor-support-content">
            <h2 className="mentor-support-title">
              <span className="highlight-text">Personalised</span> Mentor Support
            </h2>
            <p className="mentor-support-description">
              Select a mentor from a pool of 2000+ industry experts & get 1-on-1 mentorship!
            </p>
            <div className="mentor-support-buttons">
              <button className="find-mentor-btn">
                Find a Mentor
              </button>
              <button className="become-mentor-btn">
                Become a Mentor
              </button>
            </div>
          </div>
          <div className="mentor-support-image-container">
            <img 
              src="https://static.wixstatic.com/media/6aa0b2_2364083c734144fca2ce442079c2401d~mv2.png/v1/fill/w_1155,h_359,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/mentor.png" 
              alt="Mentorship Program" 
              className="mentor-support-image"
            />
          </div>
        </div>
      </div>
      {/* Our Numbers Section */}
      <div className="our-numbers-section">
        <div className="our-numbers-container">
          <h2 className="our-numbers-title">Our Numbers</h2>
          <div className="statistics-grid">
            <div className="statistic-item">
              <h3 className="statistic-number">5<span className="highlight-text">M</span>+</h3>
              <p className="statistic-label">Active Users</p>
            </div>
            <div className="statistic-item">
              <h3 className="statistic-number">12.3<span className="highlight-text">M</span>+</h3>
              <p className="statistic-label">Assessments</p>
            </div>
            <div className="statistic-item">
              <h3 className="statistic-number">130<span className="highlight-text">K</span>+</h3>
              <p className="statistic-label">Opportunities</p>
            </div>
            <div className="statistic-item">
              <h3 className="statistic-number">800<span className="highlight-text">+</span></h3>
              <p className="statistic-label">Brands trust us</p>
            </div>
            <div className="statistic-item">
              <h3 className="statistic-number">42<span className="highlight-text">K</span>+</h3>
              <p className="statistic-label">Organisations</p>
            </div>
            <div className="statistic-item">
              <h3 className="statistic-number">18<span className="highlight-text">+</span></h3>
              <p className="statistic-label">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

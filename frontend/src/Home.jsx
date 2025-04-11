import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/training-courses');
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
      <div className="level-up-section">
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
    </>
  );
};

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/training-courses');
  };

  return (
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
  );
};

export default Home;
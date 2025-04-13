import React, { useState } from 'react';

const Blog = () => {
  const [likes, setLikes] = useState({
    1: 5,
    2: 3,
    3: 2,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });
  const [clicked, setClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  });

  const handleDoubleClick = (id) => {
    if (!clicked[id]) {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: prevLikes[id] + 1,
      }));
      setClicked((prevClicked) => ({
        ...prevClicked,
        [id]: true,
      }));
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="blog-grid">
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(1)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_fcfd9ea25d6341c6877303ed69343003~mv2.webp" alt="Blog Post 1" />
            <div className="post-info">
              <span>Prince</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Mastering the Job Interview: Tips and Tricks</h3>
              <p>A successful job interview can be the key to landing your dream job. Preparation is crucial—start by our courses given in our website...</p>
              <div className="post-stats">
                <span>👁️ 4</span>
                <span>💬 0</span>
                <span>❤️ {likes[1]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(2)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_337f2af5700147fda8777f0e382dee9d~mv2.jpg" alt="Blog Post 2" />
            <div className="post-info">
              <span>Darshan Desai</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Networking for Success: Building Professional Relationships</h3>
              <p>Building a strong professional network can open doors to new opportunities and career growth...</p>
              <div className="post-stats">
                <span>👁️ 8</span>
                <span>💬 3</span>
                <span>❤️ {likes[2]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(3)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_94fc695a5706442c81e0651b7e33f43c~mv2.webp" alt="Blog Post 3" />
            <div className="post-info">
              <span>Dhruv Pandey</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Boost Your Productivity: Time Management Strategies</h3>
              <p>Effective time management is essential for boosting productivity and achieving your goals. Start the reading of my post...</p>
              <div className="post-stats">
                <span>👁️ 2</span>
                <span>💬 0</span>
                <span>❤️ {likes[3]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(4)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_46c334cd04df4ac2ace87e6372547928~mv2.jpeg" alt="Blog Post 4" />
            <div className="post-info">
              <span>Rathod</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>The Future of Learning: Embracing Online Education</h3>
              <p>Online education has revolutionized the way we learn, making education more accessible...</p>
              <div className="post-stats">
                <span>👁️ 1</span>
                <span>💬 0</span>
                <span>❤️ {likes[4]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(5)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_8ea23db6bfef45378609695108287e4b~mv2.webp" alt="Blog Post 5" />
            <div className="post-info">
              <span>Heet Patel</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Navigating Remote Work: Tips for Success</h3>
              <p>Remote work has become a norm in many industries, offering flexibility and new opportunities, or seeking to enhance your professional skills...</p>
              <div className="post-stats">
                <span>👁️ 0</span>
                <span>💬 0</span>
                <span>❤️ {likes[5]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(6)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_ab459480f8e34c8bba6697967befb839~mv2.png" alt="Blog Post 6" />
            <div className="post-info">
              <span>Pratham Patel</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Unlock Your Potential: Top Skills for the Modern Workforce</h3>
              <p>In today's fast-paced job market, having the right skills can set you apart from the competition....</p>
              <div className="post-stats">
                <span>👁️ 1</span>
                <span>💬 0</span>
                <span>❤️ {likes[6]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(7)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_81999cfc330d470d97c6308f180081a3~mv2.png/v1/fill/w_833,h_648,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6aa0b2_81999cfc330d470d97c6308f180081a3~mv2.png" alt="Blog Post 7" />
            <div className="post-info">
              <span>Samarth</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Empower Your Job Search with JobLink's Comprehensive Services</h3>
              <p>Are you on the lookout for new career opportunities or seeking to enhance your professional skills?Start gaining....</p>
              <div className="post-stats">
                <span>👁️ 1</span>
                <span>💬 0</span>
                <span>❤️ {likes[7]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(8)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_30600666f875438ab10cd9bfd83881a2~mv2.png/v1/fill/w_833,h_648,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6aa0b2_30600666f875438ab10cd9bfd83881a2~mv2.png" alt="Blog Post 8" />
            <div className="post-info">
              <span>Utpal</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Maximize Career Growth with JobLink's Industry-Leading Features</h3>
              <p>Are you looking to maximize your career growth and unlock new opportunities in the job market? Look no further than JobLink:</p>
              <div className="post-stats">
                <span>👁️ 0</span>
                <span>💬 0</span>
                <span>❤️ {likes[8]}</span>
              </div>
            </div>
          </div>
          <div className="blog-post" onDoubleClick={() => handleDoubleClick(9)}>
            <img src="https://static.wixstatic.com/media/6aa0b2_eccaacd52b94457ab0fbd9f50c7ff678~mv2.png/v1/fill/w_833,h_648,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6aa0b2_eccaacd52b94457ab0fbd9f50c7ff678~mv2.png" alt="Blog Post 9" />
            <div className="post-info">
              <span>Pratham</span>
              <span>Aug 3, 2025 • 1 min read</span>
              <h3>Advancing Careers Globally with JobLink's Innovative Solutions</h3>
              <p>In today's dynamic and competitive job market, having access to the right resources and tools is essential for advancing your career globally....</p>
              <div className="post-stats">
                <span>👁️ 1</span>
                <span>💬 0</span>
                <span>❤️ {likes[9]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
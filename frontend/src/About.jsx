import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <h2>Welcome to JobLink</h2>
        <p>
          At JobLink, we are dedicated to bridging the gap between education and
          employment. Our mission is to provide high-quality technological courses and
          job listings that empower individuals to achieve their career goals. Whether
          you are looking to upskill, reskill, or find your next job opportunity,
          JobLink is here to guide you every step of the way.
        </p>
        <img
          src="https://static.wixstatic.com/media/6aa0b2_7dce012887c74fe7a27eb110f47ab77f~mv2.jpg/v1/fill/w_751,h_295,al_c,lg_1,q_80,enc_avif,quality_auto/building.jpg"
          alt="City skyline with modern buildings"
          className="about-image"
        />
        <h2>Our Vision</h2>
        <p class="visiontext">
          At JobLink, we envision a world where education and employment opportunities are
          accessible to all. We believe that by providing the right tools and resources, we can help
          individuals build successful and fulfilling careers.
        </p>
        <h2 class="meet">Meet The Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_0fecc4af27434ca58aa92b70878c0bbc~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-08-07%20at%2017_51_edite.jpg" alt="Pratham Patel" />
            <h3>Pratham Patel</h3>
            <span className="role">Founder & CEO</span>
            <p>Pratham brings a wealth of knowledge and experience in the tech industry. With a keen eye for detail and a passion for innovation, Pratham ensures that JobLink remains at the forefront of educational and employment resources.</p>
          </div>
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_de1db653d7924b4690dea99590dea326~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/heet.jpg" alt="Heet Patel" />
            <h3>Heet Patel</h3>
            <span className="role">CTO</span>
            <p>Heet is our Chief Technology Officer, responsible for developing and maintaining the robust platform that powers JobLink. His expertise ensures a seamless and user-friendly experience for all our visitors.</p>
          </div>
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_ec6f3103e15847e9bb5ad0771ae20d8e~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/het.jpg" alt="Het Patel" />
            <h3>Het Patel</h3>
            <span className="role">UI/UX Designer</span>
            <p>Het focuses on user experience, ensuring that our website is intuitive and accessible. His designs make navigation a breeze, helping users find exactly what they need quickly and easily.</p>
          </div>
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_5948857601134b54bafa2e9a8b2b4cdc~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pince_edited.jpg" alt="Team Member 4" />
            <h3>Prince Patel</h3>
            <span className="role">Job Listings Manager</span>
            <p>Prince manages our job listings, connecting employers with the right talent. His extensive network and understanding of the job market make JobLink a go-to resource for job seekers and recruiters alike</p>
          </div>
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_779587650dc64cb0ace94b470ce2d1c6~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-08-07%20at%2018_50_48_1d1d60d0.jpg" alt="Team Member 5" />
            <h3>Darshan Desai</h3>
            <span className="role">Content Manager</span>
            <p>Darshan specializes in course content creation, curating comprehensive and relevant materials that cater to a wide range of technological fields. His dedication to quality education is evident in every course we offer</p>
          </div>
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_a780a79550ab40db9553fb54d6aa66b0~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/utpal_edited.jpg" alt="Team Member 6" />
            <h3>Utpal Patel</h3>
            <span className="role">Marketing Manager</span>
            <p>Utpal handles our marketing efforts, spreading the word about JobLink to reach a broader audience. His strategies ensure that more people can benefit from our services and resources</p>
          </div>
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_edbe196a26d34d0dae10ea1b0399be06~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/samarth_edited.jpg" alt="Team Member 7" />
            <h3>Samarth Chaudhari</h3>
            <span className="role">Data Analyst</span>
            <p>Samarth is our data analyst, providing insights that help us continually improve our offerings. His analytical skills allow us to understand user needs and enhance our platform accordingly</p>
          </div>
          <div className="team-member">
            <img src="https://static.wixstatic.com/media/6aa0b2_1b59ed8149db4de2ac966516a882d489~mv2.jpg/v1/fill/w_554,h_539,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-08-06%20at%2020_27_edited.jpg" alt="Team Member 8" />
            <h3>Dhruv Panchal</h3>
            <span className="role">Customer Support Manager and cyber security expert</span>
            <p>Dhruv oversees customer support, making sure that any questions or concerns are addressed promptly and effectively. His dedication to user satisfaction is a cornerstone of our service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
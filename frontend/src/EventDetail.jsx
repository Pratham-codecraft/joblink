import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Sample event data - in a real application, this would be fetched from a backend
const eventsData = {
  'career-development-workshop': {
    id: 'career-development-workshop',
    title: 'Career Development Workshop',
    date: 'Aug 31, 2025, 9:54 PM – 11:54 PM',
    location: 'Global Career Hub',
    image: 'https://static.wixstatic.com/media/6aa0b2_23205382252c43eca084c99e90e76b9f~mv2.png',
    description: 'Attend workshops, meet vocational trainers, and explore career training programs at our vocational training expo.',
    isClosed: true
  },
  'vocational-training-expo': {
    id: 'vocational-training-expo',
    title: 'Vocational Training Expo',
    date: 'Aug 31, 2025, 9:54 PM – 11:54 PM',
    location: 'Career Development Institute',
    image: 'https://static.wixstatic.com/media/6aa0b2_1f2be97d97a940c396e7e73bd8f903aa~mv2.png',
    description: 'Attend workshops, meet vocational trainers, and explore career training programs at our vocational training expo.',
    isClosed: true
  },
  'career-exploration-conference': {
    id: 'career-exploration-conference',
    title: 'Career Exploration Conference',
    date: 'Aug 31, 2025, 9:53 PM – 11:53 PM',
    location: 'Global Career Hub, Main St, Nashua, NH, USA',
    image: 'https://static.wixstatic.com/media/6aa0b2_d2468043cd904bc49f495df14a146a8b~mv2.png',
    description: 'Explore various career paths and opportunities with industry experts at this comprehensive conference.',
    isClosed: true
  },
  'job-search-strategies': {
    id: 'job-search-strategies',
    title: 'Job Search Strategies',
    date: 'Sep 10, 2025, 1:00 PM – 3:00 PM',
    location: 'Virtual Event',
    image: 'https://static.wixstatic.com/media/6aa0b2_a533dfd2952f41d4bf780aea2881a93b~mv2.png',
    description: 'Learn effective job search strategies to enhance your career prospects and find better opportunities.',
    isClosed: true
  },
  'tech-networking-event': {
    id: 'tech-networking-event',
    title: 'Tech Networking Event',
    date: 'Sep 15, 2025, 6:00 PM – 9:00 PM',
    location: 'Innovation Hub, Boston',
    image: 'https://static.wixstatic.com/media/6aa0b2_18c7374accc54e74a3fee08713986c61~mv2.png',
    description: 'Connect with tech professionals and companies in a relaxed networking environment.',
    isClosed: true
  },
  'resume-building-workshop': {
    id: 'resume-building-workshop',
    title: 'Resume Building Workshop',
    date: 'Sep 20, 2025, 10:00 AM – 12:00 PM',
    location: 'Career Center',
    image: 'https://static.wixstatic.com/media/6aa0b2_b06b3bc459f34992a5605cf8197fbcc4~mv2.png',
    description: 'Learn how to create an effective resume that stands out to potential employers.',
    isClosed: true
  },
  'fame-4': {
    id: 'fame-4',
    title: 'FAME 4.0',
    date: 'Sep 25, 2025, 2:00 PM – 5:00 PM',
    location: 'Pune, AXIS BANK, SERVANTS OF INDIAN SOCIETY EDUCATIONAL INSTITUTION, Shivajinagar, Pune, Maharashtra 411004, India',
    image: 'https://static.wixstatic.com/media/6aa0b2_4d09f4b1e0e34014aa98cc9f1ef95f63~mv2.webp',
    description: 'FAME 4.0 is a leadership development program focused on future-ready skills and technologies.',
    isClosed: true
  },
  'flipkart-grid-6': {
    id: 'flipkart-grid-6',
    title: 'Flipkart Grid 6.0',
    date: 'Oct 5, 2025, 9:00 AM – 4:00 PM',
    location: 'Coding Test',
    image: 'https://static.wixstatic.com/media/6aa0b2_73787546d15a4b27877c6495569d32ab~mv2.webp',
    description: 'Participate in Flipkart\'s flagship engineering campus challenge to showcase your coding skills.',
    isClosed: true
  },
  'ace-case-competitions': {
    id: 'ace-case-competitions',
    title: 'Ace Case Competitions',
    date: 'Oct 12, 2025, 11:00 AM – 1:00 PM',
    location: 'Webinar',
    image: 'https://static.wixstatic.com/media/6aa0b2_2be2283765c045f1b8128bea3b9a461e~mv2.webp',
    description: 'Learn strategies to excel in case competitions with industry experts.',
    isClosed: true
  }
};

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = eventsData[eventId];
  const goToHomeSection = () => {
    navigate('/#level-up-section2');
  };
  if (!event) {
    return (
      <div className="event-detail-container">
        <div className="event-not-found">
          <h2>Event not found</h2>
          <p>The event you're looking for doesn't exist or has been removed.</p>
          <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-container">
      <div className="event-header">
        <h1>{event.title}</h1>
        <p className="event-date-location">{event.date} | {event.location}</p>
      </div>

      <div className="event-content">
        <div className="event-image-container">
          <img src={event.image} alt={event.title} className="event-detail-image" />
        </div>

        <div className="event-info-box">
          <p className="event-description">{event.description}</p>
          
          <div className="registration-status">
            {event.isClosed ? (
              <>
                <p className="registration-closed">Registration is closed</p>
                <Link to="/" className="see-other-events">See other events</Link>
              </>
            ) : (
              <button className="register-btn">Register Now</button>
            )}
          </div>
        </div>
      </div>

      <div className="event-details-section">
        <h2>Time & Location</h2>
        <p className="event-time">{event.date.split(',')[1]}</p>
        <p className="event-location">{event.location}</p>
      </div>

      <div className="event-about-section">
        <h2>About the event</h2>
        <p>Discover new career training opportunities</p>
      </div>

      <div className="back-to-events">
        <button className="back-btn" onClick={goToHomeSection}>
          Back to Events
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
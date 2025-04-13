import React from 'react';
import { Link } from 'react-router-dom';

const TrainingCourses = () => {
  const courses = [
    { id: 1, title: 'Basic Coding in C', lessons: '12 Lessons', description: 'The Basic Coding in C course is designed for beginners in programming...', image: 'https://static.wixstatic.com/media/6aa0b2_e87cefc0ebd54d68ac544ac929565c4f~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c.webp' },
    { id: 2, title: 'DSA in C', lessons: '40 Lessons', description: 'Data Structures and Algorithms (DSA) in C is a fundamental course that explores...', image: 'https://static.wixstatic.com/media/6aa0b2_8bfa576eb65940a093c578427fd9120f~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cd.webp' },
    { id: 3, title: 'Learn CPP', lessons: '15 Lessons', description: 'C++ course is designed to cater to both beginners and experienced coders...', image: 'https://static.wixstatic.com/media/6aa0b2_8ad8563b592c42fbb6a266bc14688068~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cpp.webp' },
    { id: 4, title: 'DSA in C++', lessons: '65 Lessons', description: 'Data Structures and Algorithms in C++ is a fundamental course that explores the...', image: 'https://static.wixstatic.com/media/6aa0b2_a232ad2e36784bd2b8974dbc41111cda~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/dsa.webp' },
  ];

  const subjects = [
    { id: 1, title: 'Operating System', lessons: '20 Lessons', description: 'Learn the fundamentals of operating systems and their role in computing...', image: 'https://static.wixstatic.com/media/6aa0b2_96a6c1ae3bc04a3d8f599bf99270fc0b~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/os.webp' },
    { id: 2, title: 'DBMS', lessons: '25 Lessons', description: 'Explore Database Management Systems and their applications in data storage...', image: 'https://static.wixstatic.com/media/6aa0b2_f4825f9bbc7c421fab7c8f7d7d94926b~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/dbms.webp' },
    { id: 3, title: 'Computer Networks', lessons: '30 Lessons', description: 'Understand the principles of computer networks and data communication...', image: 'https://static.wixstatic.com/media/6aa0b2_26547cedbcb54dd6b98a1e2b3255f968~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/computer.webp' },
    { id: 4, title: 'SQL', lessons: '18 Lessons', description: 'Master SQL for efficient database querying and management...', image: 'https://static.wixstatic.com/media/6aa0b2_a47a6469d4fb48aeb13b5503b4fd2f63~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sql.webp' },
  ];

  const webDevCourses = [
    { id: 1, title: 'HTML', lessons: '9 Lessons', description: 'If you\'re interested in web development, our HTML course is a perfect fit for you...', image: 'https://static.wixstatic.com/media/6aa0b2_901148ec22ac432a9628a78654e974be~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/html.webp' },
    { id: 2, title: 'CSS', lessons: '79 Lessons', description: 'Embark on a transformative journey into MERN Stack with our CSS course....', image: 'https://static.wixstatic.com/media/6aa0b2_11d4a40a8197441794b19f30fce18d4a~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/css.webp' },
    { id: 3, title: 'Javascript', lessons: '68 Lessons', description: 'Embark on a Node.js journey with our MERN Stack course. Engage in....', image: 'https://static.wixstatic.com/media/6aa0b2_d7420c9146404dfa99b9f863fbfe548c~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/javascript.webp' },
    { id: 4, title: 'Bootstrap', lessons: '15 Lessons', description: 'Embark on a Bootstrap journey with our dynamic course! Delve into self-paced....', image: 'https://static.wixstatic.com/media/6aa0b2_46e8561bd67e4b298a4f70d290c96b01~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/boot.webp' },
    { id: 5, title: 'React', lessons: '47 Lessons', description: 'This ReactJS course provides a comprehensive introduction to this popular..', image: 'https://static.wixstatic.com/media/6aa0b2_ccf34c2dadb24afe8f68db0e2dabfa81~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/react.webp' },
    { id: 6, title: 'Node JS', lessons: '49 Lessons', description: 'Embark on a Node.js journey with our MERN Stack course. Engage in self-paced.....', image: 'https://static.wixstatic.com/media/6aa0b2_11cb1908fc744cecb0f08888973611d6~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/node.webp' },
    { id: 7, title: 'jQuery', lessons: '11 Lessons', description: 'Embark on a Node.js journey with our MERN Stack course. Engage in self-paced.....', image: 'https://static.wixstatic.com/media/6aa0b2_9c07ea9425504e209878c593d24c74f6~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/jquery.webp' },
    { id: 8, title: 'MongoDB', lessons: '35 Lessons', description: 'The MongoDB course offers you an immersive experience in mastering this...', image: 'https://static.wixstatic.com/media/6aa0b2_689be35dbca34a338791bf75fc3f0911~mv2.webp/v1/fill/w_502,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mngodb.webp' },
  ];

  return (
    <div className="courses-container">
      <h1>Joblink Pro Coding</h1>
      <p className="head1">Learn fundamental and advanced concepts of high-demand programming languages with ease!</p>
      <div className="courses-grid">
        {courses.map(course => (
          <div className="tcourse-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="lessons">{course.lessons}</p>
              <p className="description">{course.description}</p>
              <Link to="/plans-pricing" className="view-course">View Course </Link>
            </div>
          </div>
        ))}
      </div>
      <h1 class="sub1">Subject</h1>
      <p class="sub2">Empower your data journey with Data Visualisation Tools</p>
      <div className="courses-grid">
        {subjects.map(subject => (
          <div className="tcourse-card" key={subject.id}>
            <img src={subject.image} alt={subject.title} />
            <div className="course-content">
              <h3>{subject.title}</h3>
              <p className="lessons">{subject.lessons}</p>
              <p className="description">{subject.description}</p>
              <Link to="/plans-pricing" className="view-course">View Course </Link>
            </div>
          </div>
        ))}
      </div>
      <h1 class="full1">Full Stack Web Dev</h1>
      <p class="full2">Secure your dream role with confidence, thoughtful answers, and our interview prep resources.</p>
      <div className="courses-grid" style={{ marginBottom: '3rem' }}>
        {webDevCourses.slice(0, 4).map(course => (
          <div className="tcourse-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="lessons">{course.lessons}</p>
              <p className="description">{course.description}</p>
              <Link to="/plans-pricing" className="view-course">View Course </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="courses-grid">
        {webDevCourses.slice(4, 8).map(course => (
          <div className="tcourse-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="lessons">{course.lessons}</p>
              <p className="description">{course.description}</p>
              <Link to="/plans-pricing" className="view-course">View Course </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCourses;
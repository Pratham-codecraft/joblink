import React, { useState, useEffect } from 'react';
import { Box, Select, MenuItem, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue, remove, update } from 'firebase/database';
import { auth } from './firebase.js';

const FindMentor = () => {
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);
  const [filters, setFilters] = useState({
    specialization: '',
    professionalTitle: '',
    experienceLevel: ''
  });
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const mentorsRef = ref(db, 'mentors');
    onValue(mentorsRef, (snapshot) => {
      const data = snapshot.val();
      const mentorList = data ? Object.entries(data).map(([uid, details]) => ({
        uid,
        ...details
      })) : [];
      setMentors(mentorList);
    });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleChoose = (mentor) => {
    setSelectedMentor(mentor);
  };

  const confirmAssignment = () => {
    if (selectedMentor) {
      const db = getDatabase();
      const mentorRef = ref(db, `mentors/${selectedMentor.uid}`);
      remove(mentorRef).then(() => {
        alert('Mentor is assigned to you!');
        setSelectedMentor(null);
      });
    }
  };

  const filteredMentors = mentors.filter(mentor => {
    return (
      (!filters.specialization || mentor.specialization === filters.specialization) &&
      (!filters.professionalTitle || mentor.professionalTitle === filters.professionalTitle) &&
      (!filters.experienceLevel || mentor.experienceLevel === filters.experienceLevel)
    );
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="#000"
      minHeight="100vh"
      color="#fff"
      padding="2rem"
      marginTop="5rem"
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Find a Mentor at JobLink
      </Typography>
      <Typography variant="subtitle1" color="#ccc" gutterBottom>
        Connect with industry experts to accelerate your career growth.
      </Typography>

      <Box
        component="img"
        src="https://static.wixstatic.com/media/6aa0b2_90ada239dc394e7fa50df8003d322b45~mv2.webp/v1/fill/w_790,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/mentoring.webp"
        alt="Mentoring Session"
        sx={{ width: '100%', maxWidth: '790px', margin: '2rem 0' }}
      />

      <Box display="flex" gap="2rem" mb="2rem">
        <Select
          name="specialization"
          value={filters.specialization}
          onChange={handleFilterChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Filter by Specialization' }}
          sx={{ color: '#fff', borderColor: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#fff' }, '.MuiSvgIcon-root': { color: '#fff' } }}
        >
          <MenuItem value="">Select Specialization</MenuItem>
          <MenuItem value="FullStack Development">FullStack Development</MenuItem>
          <MenuItem value="Ethical Hacking">Ethical Hacking</MenuItem>
          <MenuItem value="Cybersecurity Analyst">Cybersecurity Analyst</MenuItem>
          <MenuItem value="UX/UI Designer">UX/UI Designer</MenuItem>
        </Select>
        <Select
          name="professionalTitle"
          value={filters.professionalTitle}
          onChange={handleFilterChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Filter by Professional Title' }}
          sx={{ color: '#fff', borderColor: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#fff' }, '.MuiSvgIcon-root': { color: '#fff' } }}
        >
          <MenuItem value="">Select Professional Title</MenuItem>
          <MenuItem value="Data Scientist">Data Scientist</MenuItem>
          <MenuItem value="Information Security">Information Security</MenuItem>
          <MenuItem value="Information Security">Information Security</MenuItem>
          <MenuItem value="User Experience">User Experience</MenuItem>
        </Select>
        <Select
          name="experienceLevel"
          value={filters.experienceLevel}
          onChange={handleFilterChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Filter by Experience Level' }}
          sx={{ color: '#fff', borderColor: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#fff' }, '.MuiSvgIcon-root': { color: '#fff' } }}
        >
          <MenuItem value="">Select Experience Level</MenuItem>
          <MenuItem value="Junior">Junior</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Senior">Senior</MenuItem>
        </Select>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap="2rem" width="100%" maxWidth="800px">
        {filteredMentors.map((mentor) => (
          <Box
            key={mentor.uid}
            bgcolor="#000"
            border="2px solid rgb(255, 255, 255)"
            borderRadius="0px"
            p="1rem"
            textAlign="center"
            position="relative"
            boxShadow="0px 0px 15px white"
          >
            <Typography variant="h5" color="#fff">
              {mentor.specialization}
            </Typography>
            <Typography variant="subtitle1" color="#ccc">
              {mentor.username}
            </Typography>
            <Typography variant="body2" color="#ccc">
              {mentor.professionalTitle} | {mentor.experienceLevel}
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleChoose(mentor)}
              sx={{ mt: 2, backgroundColor: 'black', color: 'cyan', borderRadius:'25px',border:'1px solid cyan', '&:hover': { backgroundColor: 'cyan',color:'black',border:'1px solid cyan' } }}
            >
              Choose
            </Button>
          </Box>
        ))}
      </Box>

      {selectedMentor && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bgcolor="#000"
          border="2px solidrgb(255, 255, 255)"
          p="2rem"
          borderRadius="8px"
          textAlign="center"
          zIndex="1000"
        >
          <Typography variant="h6" color="#fff">
            Mentor is assigned to you!
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={confirmAssignment}
            sx={{ mt: 2, backgroundColor: '#00ffcc', color: '#000', '&:hover': { backgroundColor: '#00b894' } }}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            onClick={() => setSelectedMentor(null)}
            sx={{ mt: 2, ml: 2, color: '#fff', borderColor: '#fff', '&:hover': { borderColor: '#00ffcc' } }}
          >
            Cancel
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FindMentor;
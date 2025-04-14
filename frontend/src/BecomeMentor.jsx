import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import { getDatabase, ref, set } from 'firebase/database';

const BecomeMentor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    professionalTitle: '',
    specialization: '',
    techStack: '',
    experienceLevel: '',
    linkedInProfile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    const user = auth.currentUser;

    if (user) {
      const mentorRef = ref(db, 'mentors/' + user.uid);
      await set(mentorRef, {
        ...formData,
        timestamp: new Date().toISOString()
      });
      alert('Mentor application submitted!');
      navigate('/');
    } else {
      alert('Please log in to submit your mentor application.');
      navigate('/login');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#000"
      padding="2rem"
      textAlign="center"
    >
      <Box
        width="100%"
        maxWidth="800px"
        bgcolor="#000"
        padding="2rem"
        borderRadius="8px"
        boxShadow="0 0 10px rgba(255, 255, 255, 0.1)"
      >
        <Typography variant="h3" fontWeight="bold" color="#fff" gutterBottom>
          Become a Mentor at JobLink
        </Typography>
        <Typography variant="subtitle1" color="#ccc" gutterBottom>
          Share your expertise and help others grow in their careers
        </Typography>

        <Box
          component="img"
          src="https://static.wixstatic.com/media/6aa0b2_ff2f6ca56ccb4c43a1bb7da5af1350e7~mv2.png/v1/fill/w_740,h_415,al_c,lg_1,q_85,enc_avif,quality_auto/mentor.png"
          alt="Mentor Session"
          sx={{ width: '100%', maxWidth: '600px', margin: '2rem auto', borderRadius: '0px' }}
        />

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem', marginBottom: '2rem', position: 'relative' }}>
          <TextField
            label="Username *"
            name="username"
            variant="outlined"
            fullWidth
            placeholder="Write your name"
            value={formData.username}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff', borderColor: 'cyan' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'cyan' }, '&:hover fieldset': { borderColor: 'cyan' }, '&.Mui-focused fieldset': { borderColor: 'cyan' } } }}
          />
          <TextField
            label="Professional Title *"
            name="professionalTitle"
            variant="outlined"
            fullWidth
            placeholder="e.g. Data Scientist"
            value={formData.professionalTitle}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff', borderColor: 'cyan' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'cyan' }, '&:hover fieldset': { borderColor: 'cyan' }, '&.Mui-focused fieldset': { borderColor: 'cyan' } } }}
          />
          <TextField
            label="Specialization *"
            name="specialization"
            variant="outlined"
            fullWidth
            placeholder="e.g. Machine Learning"
            value={formData.specialization}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff', borderColor: 'cyan' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'cyan' }, '&:hover fieldset': { borderColor: 'cyan' }, '&.Mui-focused fieldset': { borderColor: 'cyan' } } }}
          />
          <TextField
            label="Tech Stack *"
            name="techStack"
            variant="outlined"
            fullWidth
            placeholder="e.g. Python, Tensorflow"
            value={formData.techStack}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff', borderColor: 'cyan' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'cyan' }, '&:hover fieldset': { borderColor: 'cyan' }, '&.Mui-focused fieldset': { borderColor: 'cyan' } } }}
          />
          <TextField
            label="Experience Level *"
            name="experienceLevel"
            variant="outlined"
            fullWidth
            placeholder="e.g. Intermediate, Junior, Senior"
            value={formData.experienceLevel}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff', borderColor: 'cyan' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'cyan' }, '&:hover fieldset': { borderColor: 'cyan' }, '&.Mui-focused fieldset': { borderColor: 'cyan' } } }}
          />
          <TextField
            label="LinkedIn Profile *"
            name="linkedInProfile"
            variant="outlined"
            fullWidth
            placeholder="e.g. linkedin.com/in/yourprofile"
            value={formData.linkedInProfile}
            onChange={handleChange}
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff', borderColor: 'cyan' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'cyan' }, '&:hover fieldset': { borderColor: 'cyan' }, '&.Mui-focused fieldset': { borderColor: 'cyan' } } }}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2, backgroundColor: 'black', color: 'white', border: '1px solid white', '&:hover': { backgroundColor: 'cyan', color: 'black', border: '0px solid cyan' }, gridColumn: '1 / 2', borderRadius: '50px', padding: '10px 20px', position: 'absolute', width: '200px', top: '120%', left: '125%' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default BecomeMentor;
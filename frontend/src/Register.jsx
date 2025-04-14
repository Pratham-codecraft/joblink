import {
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    Link,
    Stack,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  import { Visibility, VisibilityOff } from "@mui/icons-material";
  import { FaFacebook, FaGithub } from "react-icons/fa";
  import { FcGoogle } from "react-icons/fc";
  import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
  // import { auth } from "../firebase"; // make sure path is correct
  import { auth } from "./firebase";
  
  
  const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async (e) => {
      e.preventDefault();
      if (!fullName || !email || !password) {
        alert("Please fill all fields.");
        return;
      }
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
          displayName: fullName,
        });
        alert("User registered successfully!");
        navigate("/login");
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f4f6f8"
      >
        <Box
          width="400px"
          p={4}
          bgcolor="#fff"
          borderRadius={3}
          boxShadow={3}
          component="form"
          onSubmit={handleRegister}
        >
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography fontSize="14px" sx={{ color: "#000" }}>
              Already have an account?{" "}
              <Link
                onClick={() => navigate("/login")}
                underline="hover"
                sx={{ fontWeight: 500, cursor: "pointer", color: "#1976d2" }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
  
          {/* Title */}
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#000" }}>
            Sign up
          </Typography>
  
          {/* Social Buttons */}
          <Stack direction="row" spacing={1} mb={2}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FcGoogle />}
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: "500",
              }}
              disabled
            >
              Sign up with Google
            </Button>
            <IconButton sx={{ bgcolor: "#f0f0f0" }} disabled>
              <FaFacebook color="#3b5998" />
            </IconButton>
            <IconButton sx={{ bgcolor: "#f0f0f0" }} disabled>
              <FaGithub />
            </IconButton>
          </Stack>
  
          <Divider sx={{ my: 2, color: "#000", "&::before, &::after": { borderColor: "#000" } }}>
            <Typography sx={{ color: "#000" }}>or</Typography>
          </Divider>
  
          {/* Full Name */}
          <Typography fontSize="14px" fontWeight="500" mb={0.5} sx={{ color: "#000" }}>
            Enter your full name
          </Typography>
          <TextField
            placeholder="Full name"
            fullWidth
            margin="normal"
            size="small"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
  
          {/* Email */}
          <Typography fontSize="14px" fontWeight="500" mb={0.5} sx={{ color: "#000" }}>
            Enter your email address
          </Typography>
          <TextField
            placeholder="Email address"
            fullWidth
            margin="normal"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          {/* Password */}
          <Typography fontSize="14px" fontWeight="500" mb={0.5} sx={{ color: "#000" }}>
            Create a password
          </Typography>
          <TextField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
  
          {/* Register Button */}
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              mt: 3,
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 2,
              bgcolor: "#1976d2",
              py: 1.5,
              fontSize: "15px",
              "&:hover": {
                bgcolor: "#125ea4",
              },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default Register;
  
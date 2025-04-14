import {
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
    Link,
  } from "@mui/material";
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { Visibility, VisibilityOff } from "@mui/icons-material";
  import { FaFacebook, FaGithub } from "react-icons/fa";
  import { FcGoogle } from "react-icons/fc";
  
  // Firebase imports
  import { auth } from "./firebase";
  import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  
  const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    // Email/password states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    // Login handler
    const handleLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/home");
      } catch (error) {
        alert("Error: " + error.message);
      }
    };
  
    // Google Sign-In handler
    const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        alert("Google Sign-In successful!");
        navigate("/home");
      } catch (error) {
        alert("Error: " + error.message);
      }
    };
  
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="#f4f6f8"
      >
        <Box width="400px" p={4} bgcolor="white" borderRadius={3} boxShadow={3}>
          {/* Welcome and Sign Up on the same row */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h6" fontWeight="bold" color="black">
              Welcome to <span style={{ color: "#1976d2" }}>CARS360</span>
            </Typography>
            <Typography fontSize="14px" color="black">
              No account?{" "}
              <Link
                underline="hover"
                onClick={() => navigate("/register")}
                sx={{ cursor: "pointer", fontWeight: 500 }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
  
          {/* Sign in title */}
          <Typography variant="h4" fontWeight="bold" color="black" gutterBottom>
            Sign in
          </Typography>
  
          {/* Social logins */}
          <Stack direction="row" spacing={1} mb={2} mt={1}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FcGoogle />}
              sx={{
                textTransform: "none",
                bgcolor: "#f5f5f5",
                borderRadius: 2,
              }}
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </Button>
            <IconButton sx={{ bgcolor: "#f5f5f5" }}>
              <FaFacebook color="#4267B2" />
            </IconButton>
            <IconButton sx={{ bgcolor: "#f5f5f5" }}>
              <FaGithub />
            </IconButton>
          </Stack>
  
          <Divider sx={{ my: 2, color: "black" }}>or</Divider>
  
          {/* Email */}
          <Typography fontSize="14px" fontWeight="500" mb={0.5} color="black">
            Enter your username or email address
          </Typography>
          <TextField
            placeholder="Username or email address"
            fullWidth
            margin="normal"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          {/* Password */}
          <Typography
            fontSize="14px"
            fontWeight="500"
            mt={2}
            mb={0.5}
            color="black"
          >
            Enter your Password
          </Typography>
          <TextField
            placeholder="Password"
            fullWidth
            margin="normal"
            size="small"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
  
          {/* Forgot password */}
          <Box mt={1} mb={2} textAlign="right">
            <Link
              underline="hover"
              sx={{ cursor: "pointer", fontSize: "14px", color: "black" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Link>
          </Box>
  
          {/* Sign in button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 2,
              py: 1.2,
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default Login;
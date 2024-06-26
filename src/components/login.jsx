import Avatar from "@mui/material/Avatar";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.main" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit">Double Helix 🧡</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiMessage, setApiMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('https://dna-testing-system-jl95.onrender.com/signin', {
              email,
              password
          });

          toast.success(response.data.message);
          // Update the API message in state
          setApiMessage(response.data.message);
          setError('');

          // Storing the token in localStorage after successful login
          localStorage.setItem('token', response.data.token);
          console.log('Token stored in localStorage:', response.data.token);

          navigate('/home'); 

      } catch (error) {
          // Update the error message in state
          toast.error('Login failed. Please check your credentials.');
          setApiMessage('');
          setError('Login failed. Please check your credentials.');
          console.error('Login failed: ', error);
}

};


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh"}}>
        <CssBaseline />
        <Grid 
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
            //   "url(https://img.freepik.com/free-vector/dna-sequence-hand-wireframe-dna-code-molecules-structure-mesh_127544-902.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais)",
        //    "url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/yRF5c-O/videoblocks-science-fiction-spinning-dna-molecules-seamless-looping-motion-background-sci-fi-animated-video-loop-animation-of-double-helix-dna-stucture-full-hd-1920-x-1080-blue_scjumqxae_thumbnail-1080_01.png)",
          "url(https://scitechdaily.com/images/DNA-Genetics.gif)",
        // "url(https://qph.cf2.quoracdn.net/main-qimg-130544e9a92660a9cff16d522c884478)",
        // "url(https://cdn.dribbble.com/userupload/11186546/file/original-2058f699c2610b30925b2df475ba5418.gif)",
        // "url(https://scitechdaily.com/images/Spinning-DNA-Blue.gif)",


        backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, border: "2px solid gray", width: 90, height: 90 }}
              src="data:image/png;base64,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"
            ></Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: defaultTheme.palette.primary.dark,
                fontFamily: "bold",
                fontSize: 40,
              }}
            >
              Login
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
              <TextField
              value={email} onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              value={password} onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button

                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
            
              <Copyright sx={{ mt: 5 }} />
            </Box>


            {apiMessage && <p>{apiMessage}</p>}
            {error && <p style={{ color: 'red'}}>{error}</p>}


          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;

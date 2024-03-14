import  { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Add } from '@mui/icons-material';

const AddTech = () => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [lab_id, setLab_id] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const apiUrl = 'https://dna-testing-system.onrender.com/addtechnical';

    const data = {
      username: username,
      lab_id: lab_id,
      phone: phone,
      email: email,
      password: password,
      nationalId: nationalId,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setOpen(true);
        console.log('Data added successfully!');
      } else {
        let errorText = await response.text();
        console.error('Failed to add data! Error:', errorText || 'Unknown error');
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        sx={{
          fontFamily: 'bold',
          fontSize: 30,
          mb: 3,
          mt: 1,
          color: theme.palette.info.dark,
        }}>
        Add Technicals
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          m: 7,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
        noValidate
        autoComplete="off">
        <Stack sx={{ gap: 3 }} direction="row">
          <TextField
            sx={{ flex: 1 }}
            label="User Name"
            variant="filled"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            sx={{ flex: 1 }}
            label="Lab ID"
            type="text"
            variant="filled"
            value={lab_id}
            onChange={(e) => setLab_id(e.target.value)}
          />
        </Stack>

        <Stack sx={{ gap: 3 }} direction="row">
          <TextField
            sx={{ flex: 1 }}
            label="Phone Number"
            type="tel"
            variant="filled"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            sx={{ flex: 1 }}
            label="E-mail"
            type="email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>

        <TextField
          label="Password"
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          label="National Id"
          type="number"
          variant="filled"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />

        <Box sx={{ textAlign: 'right' }}>
          <Button
            type="submit"
            sx={{ textTransform: 'capitalize' }}
            variant="contained"
            endIcon={<Add />}>
            Add Technicals
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}>
            <Alert severity="info" onClose={handleCloseSnackbar} sx={{ width: '100%' }}>
              A Successful New Addition 🧡!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default AddTech;
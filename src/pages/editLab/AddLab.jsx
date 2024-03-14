


import  { useState } from 'react';
import { Box, Button, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { Alert } from '@mui/material';
import { useTheme } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddLab = () => {
    const theme = useTheme();
    
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const apiUrl = 'https://dna-testing-system.onrender.com/addlab';

        const data = {
            location: location,
            name: name,
            phone: phone
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Data added successfully!');
                setSnackbarOpen(true); // Show the snackbar on successful addition
            } else {
                console.error('Failed to add data!');
            }
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
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
                }}
            >
                Add Laboratory
            </Typography>

            <Box
                component="form"
                sx={{
                    m: 7,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Stack sx={{ gap: 3 }} direction="row">
                    <TextField
                        sx={{ flex: 1 }}
                        label="Lab name"
                        variant="filled"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </Stack>

                <TextField
                    id="filled-basic"
                    label="Phone"
                    type="number"
                    variant="filled"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    id="filled-basic"
                    label="Location"
                    variant="filled"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <Box sx={{ textAlign: 'right' }}>
                    <Button
                        type="submit"
                        sx={{ textTransform: 'capitalize' }}
                        variant="contained"
                        endIcon={<Add/>}

                        onClick={handleSubmit}

                    >
                        Add Laboratory
                    </Button>

                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={6000}
                        onClose={handleSnackbarClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <Alert severity="success" sx={{ width: '100%' }}>
                            A Successful New Addition 🧡!
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </div>
    );
};

export default AddLab;
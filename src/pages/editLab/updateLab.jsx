import { Update } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateLab = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [labData, setLabData] = useState([]);
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    const fetchLabData = async () => {
      try {
        const response = await axios.get('https://dna-testing-system-jl95.onrender.com/labs', {
          headers: {
            'token': token,
          },
        });
        if (response.data && Array.isArray(response.data.labs)) {
          setLabData(response.data.labs);
        } else {
          console.error('No labs array found in the response data');
        }
      } catch (error) {
        console.error('Error fetching lab data:', error.message);
      }
    };

    if (!token) {
      console.log('Token not found in storage');
    } else {
      fetchLabData();
    }
  }, [token]);

  useEffect(() => {
    const lab = labData.find(lab => lab._id === params.id);
    if (lab) {
      setName(lab.name);
      setLocation(lab.location);
      setPhone(lab.phone);
    } else {
      console.error('Lab with id not found');
    }
  }, [labData, params.id]);

  const submitForm = (e) => {
    e.preventDefault();
    axios.put(
      `https://dna-testing-system-jl95.onrender.com/updatelab/${params.id}`,
      {
        name: name,
        location: location,
        phone: phone,
      },
      {
        headers: {
          token: token,
        },
      }
    ).then((response) => {
      console.log('Lab updated successfully:', response.data);
      toast.success('Updated Successfully!', {
        autoClose: 3000,
        onClose: () => navigate('/home/labs'),
      });
    }).catch((error) => {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Failed to update: ${error.response.data.message}`);
      } else {
        toast.error('An error occurred while updating.');
      }
    });
  };

  return (
    <div>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 30,
          mb: 3,
          mt: 1,
          color: theme.palette.info.dark,
        }}
      >
        Update Laboratory
      </Typography>

      <Box
        component="form"
        onSubmit={submitForm}
        sx={{
          m: 7,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 3 }} direction={"row"}>
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

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            endIcon={<Update />}
          >
            Update Laboratory
          </Button>
          <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <Alert severity="error" sx={{ width: "100%" }}></Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateLab;
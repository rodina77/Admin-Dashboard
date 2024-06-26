import { Update } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdataPopulation = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [national_id, setNationalId] = useState('');
  const [technical_id, setTechnical_id] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [DNA_sequence, setSequence] = useState('');
  const [popData, setPopData] = useState([]);
  const token = localStorage.getItem('token');
  const theme = useTheme();
  const data =[
    { value : "male",
     label:"male"
   },
   { value : "female",
   label:"female"
   },
   ];
  const bloodData =[
    { value : "A+",
     label:"A+"
   },
   { value : "B+",
   label:"B+"
   },
   { value : "O+",
   label:"O+"
   },
   { value : "AB+",
   label:"AB+"
   },
   { value : "AB-",
   label:"AB-"
   },
   { value : "B-",
   label:"B-"
   },
   { value : "A-",
   label:"A-"
   },
   { value : "O-",
   label:"O-"
   },
   ];
  const statusdata =[
    { value : "crime",
     label:"crime"
   },
   { value : "disaster",
   label:"disaster"
   },
   { value : "missing",
   label:"missing"
   },
   { value : "acknowledged",
   label:"acknowledged"
   },
   ];

   useEffect(() => {
    const fetchLabData = async () => {
      try {
        const response = await axios.get('https://dna-testing-system-jl95.onrender.com/api/getAllPopulation', {
          headers: {
            'token': token,
          },
        });
        if (response.data && Array.isArray(response.data.population)) {
          setPopData(response.data.population);
        } else {
          console.error('No population array found in the response data');
        }
      } catch (error) {
        console.error('Error fetching population data:', error.message);
      }
    };

    if (!token) {
      console.log('Token not found in storage');
    } else {
      fetchLabData();
    }
  }, [token]);

  useEffect(() => {
    const pop = popData.find(pop => pop._id === params.id);
    if (pop) {
      setAddress(pop.address);
      setBirthdate(pop.birthdate);
      setBloodType(pop.bloodType);
      setNationalId(pop.national_id);
      setDescription(pop.description);
      setGender(pop.gender);
      setName(pop.name);
      setPhone(pop.phone);
      setStatus(pop.status);
      setTechnical_id(pop.technical_id);
    } else {
      console.error('population with id not found');
    }
  }, [popData, params.id]);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('address', address);
    formData.append('birthdate', birthdate);
    formData.append('bloodType', bloodType);
    formData.append('description', description);
    formData.append('gender', gender);
    formData.append('name', name);
    formData.append('national_id', national_id);
    formData.append('phone', phone);
    formData.append('status', status);
    formData.append('file', DNA_sequence);
    axios.put(`https://dna-testing-system-jl95.onrender.com/api/updatePopulation/${params.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'token': token
      }}).then((response) => {
      console.log("population updated successfully:", response.data);
      toast.success("Updated Successfully!", {
        autoClose: 3000, // Automatically close the notification after 3 seconds
        onClose: () => {
          navigate("/home/pop");},});})
    .catch((error) => {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Failed to update: ${error.response.data.message}`);
    } else {
        toast.error('An error occurred while updating.');
    }});}

  const handleSequenceChange = (e) => {
    setSequence(e.target.files[0]);
  }


  return (
    <div>
      <Typography
        sx={{
          fontFamily: "bold",
          fontSize: 30,
          mb: 3,
          mt: 1,
          color: theme.palette.info.dark,
        }}
      >
        Update Population
      </Typography>

      <Box
        onSubmit={submitForm}
        component="form"
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
            label="address"
            type="text"
            variant="filled"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
  

          <TextField
            sx={{ flex: 1 }}
            type="date"
            variant="filled"
            value={birthdate}
            onChange={e => setBirthdate(e.target.value)}
          />
        </Stack>

        <Stack sx={{ gap: 3 }} direction={"row"}>
          <TextField
            sx={{ flex: 1 }}
            label="Technical Id"
            type="text"
            variant="filled"
            value={technical_id}
          />

<TextField
           id="filled-basic"
           select
            sx={{ flex: 1 }}
             label="Blood Type"
             variant="filled"
             defaultValue="A+"
             value={bloodType}
             onChange={e => setBloodType(e.target.value)}
          >
            {bloodData.map((option) =>(
              <MenuItem key={option.value} value= {option.value}>
                {option.value}
              </MenuItem>

            ))}
          </TextField>
        </Stack>

        <TextField
          id="filled-basic"
          sx={{ flex: 1 }}
          label="description"
          variant="filled"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

                 <TextField
           id="filled-basic"
           select
            sx={{ flex: 1 }}
             label="Gender"
             variant="filled"
             value={gender}
             defaultValue="male"
             onChange={e => setGender(e.target.value)}
          >
            {data.map((option) =>(
              <MenuItem key={option.value} value= {option.value}>
                {option.value}
              </MenuItem>

            ))}
          </TextField>

        <Stack sx={{ gap: 3 }} direction={"row"}>

          <TextField
            id="filled-basic"
            sx={{ flex: 1 }}
            label="name"
            type="text"
            variant="filled"
            value={name}
            onChange={e => setName(e.target.value)}
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="filled-basic"
            sx={{ flex: 1 }}
            label="national id"
            value={national_id}
            onChange={e => setNationalId(e.target.value)}
            variant="filled"
          />
        </Stack>

        <TextField
            id="filled-basic"
            sx={{ flex: 1 }}
            label="phone"
            variant="filled"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            InputLabelProps={{
                shrink: true,
              }}
          />

        <Stack sx={{ gap: 3 }} direction={"row"}>
                 <TextField
           id="filled-basic"
           select
            sx={{ flex: 1 }}
             label="Status"
             variant="filled"
             value={status}
             defaultValue="crime"
             onChange={e => setStatus(e.target.value)}
          >
            {statusdata.map((option) =>(
              <MenuItem key={option.value} value= {option.value}>
                {option.value}
              </MenuItem>

            ))}
          </TextField>

                  <TextField
                    sx={{ flex: 1 }}
                    type="file"
                    variant="filled"
                    name="file"
                    onChange={handleSequenceChange}
                  />
                </Stack>


        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            endIcon={<Update />}
          >
            Update Person
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={6000}
        
          >
            
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            // open={open}
            autoHideDuration={6000}
            // onClose={handleClose}
          >
            <Alert severity="info" sx={{ width: "100%" }}>
              A Successful Update!
            </Alert>
          </Snackbar>
          
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default UpdataPopulation;

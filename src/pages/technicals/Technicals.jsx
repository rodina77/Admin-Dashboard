import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { rows } from "./data";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Technicals = () => {
  const theme = useTheme();
  const navigate = useNavigate();


  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      getRowId: "labcode",
    },
    {
      field: "lab_id",
      headerName: "Lab ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "username",
      headerName: "User Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "password",
      headerName: "Password",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "nationalId",
      headerName: "National ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const labId = params.row.id;
    
        const handleDeleteClick = () => handleDeleteLab(labId);
    
        return (
          <Stack direction="row">
            <IconButton aria-label="delete" onClick={handleDeleteClick}>
              <Delete sx={{ color: theme.palette.error.dark }} />
            </IconButton>
            <Link to={`/home/updatetech/${labId}`}>
              <IconButton aria-label="update">
                <Edit sx={{ color: theme.palette.primary.dark }} />
              </IconButton>
            </Link>
          </Stack>
    );
    },
    },
  ];


  const [techdata, settechdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('Token not found in storage');
      return;
    }

    getTechData(token);
  }, []);

  const getTechData = (token) => {
    axios.get('https://dna-testing-system.onrender.com/getTechnicals', {
      headers: {
        'token': token
      }
    })
    .then(res => {
      settechdata(res.data.technicals || []);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
};



const filteredtechdata = techdata.filter(tech =>
  tech.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  tech.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
  tech.phone.includes(searchTerm)
);

const handleDeleteLab = async (techId) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`https://dna-testing-system.onrender.com/deletetechnical/${techId}`, {
      headers: {
        'token': token
      }
    });

    if (response.status === 200) {
      settechdata(prevTechData => prevTechData.filter(tech => tech._id !== techId));
      toast.success('technical deleted successfully!');
      console.log('Lab deleted successfully!');
    } else {
      console.error('Something went wrong while deleting the lab');
    }
  } catch (error) {
    console.error('Error deleting lab:', error.message);
}
};





const rows = filteredtechdata.map((tech) => ({
  id: tech._id,
  email: tech.email,
  password: tech.password,
  username: tech.username,
  phone: tech.phone,
  nationalId: tech.nationalId,
  lab_id: tech.lab_id
}));


  return (
    <Box sx={{ height: 600, width: "98%" }}>
      <Stack >

       <Box>
         <Button variant="contained" endIcon={<Add />} onClick={() => navigate('/home/addtech')} >
           Add Technicals
         </Button>


         <input
        type="text"
        placeholder="Search by email or username or phone"
        value={searchTerm}
        onChange={handleSearch}
/>











       </Box>

        <Typography
          sx={{
            fontFamily: "bold",
            fontSize: 40,
            mb: 1,
            mt: 1,
            color: theme.palette.info.dark,
          }}
        >
          Technicals Data
        </Typography>
      </Stack>

      <DataGrid
        rows={rows}
        slots={{
          toolbar: GridToolbar,
        }}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Technicals;

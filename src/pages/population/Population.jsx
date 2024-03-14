
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import {  IconButton, Stack } from "@mui/material";
import {  Edit } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Population = () => {

  const theme = useTheme()
  // const navigate = useNavigate();


  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      getRowId: "labid , techid",

    },
   
    {
      field: "name",
      headerName: "Name",
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
      field: "address",
      headerName: "Address",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "nationalid",
      headerName: "National ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      align: "center",
      headerAlign: "center",
      
    }, {
      field: "birth",
      headerName: "Birthdate",
      flex: 1,
      align: "center",
      headerAlign: "center",
      
    }, {
      field: "blood",
      headerName: "Blood Type",
      flex: 1,
      align: "center",
      headerAlign: "center",
      
    },
    {
      field: "dna",
      headerName: "DNA Sequence",
      flex: 1,
      align: "center",
      headerAlign: "center",
      
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
      align: "center",
      headerAlign: "center",
      
    },
    {
      field: "tech_id",
      headerName: "Technical ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
      
    },
    {
      field: "lab_id",
      headerName: "Lab ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
      
    },
    {
      field: "desc",
      headerName: "Description",
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
        
        return (
          <Stack direction="row">
            
            <Link to={`/home/updatepopulation/${labId}`}>
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

    // Check if token exists in local storage
    if (!token) {
      console.log('Token not found in storage');
      return;
    }

    getTechData(token);
  }, []);

  const getTechData = (token) => {
    axios.get('https://dna-testing-system.onrender.com/getAllPopulation', {
      headers: {
        'token': token
      }
    })
    .then(res => {
      settechdata(res.data.population || []);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // const filteredtechdata = techdata.filter(tech =>
  //   tech.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   tech.DNA_sequence.toLowerCase().includes(searchTerm.toLowerCase()) || // Convert both to lowercase for case-insensitive search
  //   tech.phone.includes(searchTerm)
  // );


  const filteredtechdata = techdata.filter(tech =>
    (tech.address && tech.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (tech.name && tech.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (tech.DNA_sequence && tech.DNA_sequence.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (tech.phone && tech.phone.includes(searchTerm))
  );



  const rows = filteredtechdata.map((pop) => ({
    id: pop._id,
    address: pop.address,
    birth: pop.birthdate,
    blood: pop.bloodType,
    desc: pop.description,
    gender: pop.gender,
    lab_id: pop.lab_id,
    name: pop.name,
    nationalid: pop.national_id,
    phone: pop.phone,
    state: pop.status,
    tech_id: pop.technical_id,
    dna: pop.DNA_sequence,

  }));




  return (
    <Box sx={{ height: 600, width: "98%" }}>

      <Typography
      
        sx={{
          fontFamily:"bold",
          fontSize: 40, 
          mb: 1,
          mt: 1,
          color: theme.palette.info.dark,
        }}
      >
        Population Data
      
      </Typography>

      <input
        type="text"
        placeholder="Search by email or username or phone"
        value={searchTerm}
        onChange={handleSearch}
/>


    <DataGrid rows={rows}
      slots={{
        toolbar: GridToolbar
      }}
    // @ts-ignore
    columns={columns} />
  </Box>
  );
};

export default Population;

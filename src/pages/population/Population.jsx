import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import {  IconButton, Stack } from "@mui/material";
import {  Edit } from "@mui/icons-material";
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './population.css'
const Population = () => {
  const theme = useTheme();
  const [popData, setPopData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('https://dna-testing-system-jl95.onrender.com/api/identificationByDNA', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
              'token': token
          }
      });

      if (response.data.personData && typeof response.data.personData === 'object') {
        setPopData([response.data.personData]);
      } else {
          console.error('Error: response.data.personData is not an object');
      }
    } catch (error) {
      console.error('Error searching DNA sequences:', error.message);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", align: "center", headerAlign: "center",getRowId: (row) => row.id,  type: 'string' },
    { field: "name", headerName: "Name", flex: 1, align: "center", headerAlign: "center",  getRowId: (row) => row.id,  type: 'string', },
    { field: "phone", headerName: "Phone Number", flex: 1, align: "center", headerAlign: "center",    getRowId: (row) => row.id,  type: 'string', },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
    },
    {
      field: "nationalid",
      headerName: "National ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
      
    }, {
      field: "birth",
      headerName: "Birthdate",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
      
    }, {
      field: "blood",
      headerName: "Blood Type",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
      
    },
    {
      field: "dna",
      headerName: "DNA Sequence",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
      
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,      
    },
    {
      field: "tech_id",
      headerName: "Technical ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
    },
    {
      field: "lab_id",
      headerName: "Lab ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
    },
    {
      field: "desc",
      headerName: "Description",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
    getRowId: (row) => row.id,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      align: "center",
      headerAlign: "center",
      type: 'string',
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



  useEffect(() => {
    const token = localStorage.getItem('token');

    // Check if token exists in local storage
    if (!token) {
      console.log('Token not found in storage');
      return;
    }
    getPopdata(token);
  }, []);

  const getPopdata = (token) => {
    axios.get('https://dna-testing-system-jl95.onrender.com/api/getAllPopulation', {
      headers: {
        'token': token
      }
    })
    .then(res => {
      setPopData(res.data.population || []);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
  }

  const getRowId = (row) => row.id;

  const filteredtechdata = Array.isArray(popData) ? popData.filter(tech =>
    (tech.address && tech.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (tech.description && tech.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (tech.dna && tech.dna.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (tech.status && tech.status.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (tech.phone && tech.phone.includes(searchTerm)) ||
    (tech.national_id && tech.national_id.includes(searchTerm))||
    (tech.lab_id && tech.lab_id.includes(searchTerm))||
    (tech.technical_id && tech.technical_id.includes(searchTerm))
  ) : [];

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
    dna: pop.DNA_sequence
  }));

  return (
    <Box sx={{ height: 600, width: "98%" }}>
  <Stack >

<Box>

<Stack direction={"row"} justifyContent={"flex-end"}>
 <input
 className="file_search"
  type="file"
  onChange={handleFileUpload}
/> 

      <input
      className="normal_search"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
</Stack>
    
</Box>

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
    </Stack>

    <DataGrid rows={rows}
    getRowId={getRowId}
    columns={columns}
      slots={{
        toolbar: GridToolbar
      }}
    // @ts-ignore
   />
  </Box>
  );
};

export default Population;
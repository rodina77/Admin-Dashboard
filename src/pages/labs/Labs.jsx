// @ts-nocheck
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { IconButton, Stack } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { alpha } from "@mui/material/styles";
import { InputBase, styled } from "@mui/material";


const Labs = () => {
  

  const theme = useTheme();
    const navigate = useNavigate();

    const [labData, setLabData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
};

const handleDeleteLab = async (labId) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`https://dna-testing-system.onrender.com/deletelab/${labId}`, {
      headers: {
        'token': token
      }
    });

    if (response.status === 200) {
      setLabData(prevLabData => prevLabData.filter(lab => lab._id !== labId));
      console.log('Lab deleted successfully!');
    } else {
      console.error('Something went wrong while deleting the lab');
    }
  } catch (error) {
    console.error('Error deleting lab:', error.message);
  }
};


useEffect(() => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.log('Token not found in storage');
    return;
  }

  getLabData(token);
}, []);


const filteredLabData = labData.filter(lab =>
  lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  lab.phone.includes(searchTerm) ||
  lab.location.toLowerCase().includes(searchTerm.toLowerCase())
);



  const columns = [
    // {
    //   field: "labcode",
    //   headerName: "Lab Code",
    //   align: "center",
    //   headerAlign: "center",
    //   getRowId: "id",
    // },
    {
      field: "labname",
      headerName: "Lab Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "location",
      headerName: "Location",
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
        <Link to={`/home/updatelab/${labId}`}>
          <IconButton aria-label="update">
            <Edit sx={{ color: theme.palette.primary.dark }} />
          </IconButton>
        </Link>
      </Stack>
);
},
},
 ];



  //  const rows = [
  //   {
  //     id: "1",
  //     labcode: 1,
  //     labname: "Al-Hayah",
  //     location: "Benha,egypt",
  //     phone: "555444",
  //     email: "info@hayahdoublehelix.com",
  //     action: "blaaa",
  //   },
  //   {
  //     id: "2",
  //     labcode: 1,
  //     labname: "Al-Hayah",
  //     location: "Benha,egypt",
  //     phone: "555444",
  //     email: "info@hayahdoublehelix.com",
  //     action: "blaaa",
  //   },
    
    
  // ];
  
  const rows = filteredLabData.map((lab) => ({
    id: lab._id,
    labname: lab.name,
    location: lab.location,
    phone: lab.phone,
  }));
  

 

  const getLabData = (token) => {
    axios.get('https://dna-testing-system.onrender.com/labs', {
      headers: {
        'token': token
      }
    })
    .then(res => {
      if (res.data && Array.isArray(res.data.labs)) {
        setLabData(res.data.labs);
      } else {
        console.error('No labs array found in the response data');
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized - Please check your token or login status');
      } else {
        console.error('Error fetching data:', error.message);
      }
    });
  }



  
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));





  return (
    <Box sx={{ height: 600, width: "98%" }}>

      <Stack>
        
      <Box>

       <Stack direction={"row"} justifyContent={"space-between"}>


         <Button variant="contained" endIcon={<Add/>} onClick={() => navigate('/home/addlab')}>
           
           Add Lab
         </Button>
        
        
         {/* <input
         type="text"
         placeholder="Search by name, phone, or location"
         value={searchTerm}
         onChange={handleSearch}/> */}
        
        
        
        <Search>
           <SearchIconWrapper>
             <SearchIcon />
           </SearchIconWrapper>
           <StyledInputBase
         placeholder="Search by name, phone, or location"
         inputProps={{ "aria-label": "search" }}
         value={searchTerm}
         onChange={handleSearch}
        
         />
           
         </Search>
       </Stack>

        


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
        Laboratories Data
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

export default Labs;

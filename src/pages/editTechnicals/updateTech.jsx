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
// import React from "react";
// import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const UpdateTech = () => {
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [lab_id, setLab_id] = useState("");
  const token = localStorage.getItem("token");

  function submitForm(e) {
    e.preventDefault();
    axios
      .put(
        `https://dna-testing-system.onrender.com/updatetechnical/${params.id}`,
        {
          email: email,
          password: password,
          username: username,
          phone: phone,
          nationalId: nationalId,
          lab_id: lab_id,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((response) => {
        console.log("lab updated successfully:", response.data);
        toast.success("Updated Successfully!", {
          autoClose: 3000, // Automatically close the notification after 3 seconds
          onClose: () => {
            navigate("/home/tech");
          },
        });
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(`Failed to update: ${error.response.data.message}`);
      } else {
          toast.error('An error occurred while updating.');
      }
      });
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
        Update Technicals
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
            label="User Name"
            variant="filled"
            onChange={e => setUserName(e.target.value)}
          />

          <TextField
          
            sx={{ flex: 1 }}
            label="Lab ID"
            type="text"
            variant="filled"
            onChange={e => setLab_id(e.target.value)}
          />
        </Stack>

        <Stack sx={{ gap: 3 }} direction={"row"}>
          <TextField
            id="field 1"
            sx={{ flex: 1 }}
          
            label="Phone Number"
            type="tel"
            variant="filled"
            onChange={e => setPhone(e.target.value)}
          />

          <TextField
            id="field 2"
            sx={{ flex: 1 }}
            label="E-mail"
            type="email"
            variant="filled"
             onChange={e => setEmail(e.target.value)}
          />
        </Stack>

        <TextField id="field 3" label="Password" variant="filled" type="password" onChange={e => setPassword(e.target.value)}/>

        <TextField
        
          label="National Id"
          type="text"
          variant="filled"
          onChange={e => setNationalId(e.target.value)}
        />

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            endIcon={<Update />}
          >
            Update Technicals
          </Button>

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
        </Box>
      </Box>
    </div>
  );
};

export default UpdateTech;

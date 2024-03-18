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
import { useState } from "react";
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
  // const [errorMessage, setErrorMessage] = useState("");
  const token = localStorage.getItem("token");

  function submitForm(e) {
    e.preventDefault();
    axios
      .put(
        `https://dna-testing-system.onrender.com/updatelab/${params.id}`,
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
      )
      .then((response) => {
        console.log("lab updated successfully:", response.data);
        toast.success("Updated Successfully!", {
          autoClose: 3000, // Automatically close the notification after 3 seconds
          onClose: () => {
            navigate("/home/labs");
          },
        });
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(`Failed to update: ${error.response.data.message}`);
        } else {
          toast.error("An error occurred while updating.");
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
            onChange={(e) => setName(e.target.value)}
          />
        </Stack>

        <TextField
          id="filled-basic"
          label="Phone"
          type="number"
          variant="filled"
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* <TextField id="filled-basic" label="E-mail" type="email" variant="filled" /> */}
        <TextField
          id="filled-basic"
          label="Location"
          variant="filled"
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

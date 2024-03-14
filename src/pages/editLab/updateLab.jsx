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
import { useNavigate } from "react-router-dom";

const UpdateLab = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const [open, setOpen] = React.useState(false);

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const onSubmit = () => {
  //   handleClick();
  // };

  const params = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
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
        console.log("Product updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });

    navigate("/home/labs");
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
            // error={ Boolean(errors.Labname)}
            // // eslint-disable-next-line no-extra-boolean-cast
            // helperText={Boolean(errors.Labname) ? "This field is required." : null}
            // {...register("Labname", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Lab name"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
          />

          {/* <TextField 
          error={ Boolean(errors.Labcode)}
            // eslint-disable-next-line no-extra-boolean-cast
            helperText={Boolean(errors.Labcode) ? "This field is required." : null}
            {...register("Labcode", { required: true, minLength: 3 })}
             sx={{ flex: 1 }}
             label="Lab code"
             type="number" 
             variant="filled" /> */}
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

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            // open={open}
            // onClose={handleClose}
          >
            <Alert  severity="info" sx={{ width: "100%" }}>
              A Successful Update 🧡!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateLab;

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

const UpdateTech = () => {
  const theme = useTheme();

  // const [open, setOpen] = React.useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = () => {
  //   handleClick()
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const params = useParams();
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
        console.log("technical updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
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
            // error={Boolean(errors.name)}
            // // eslint-disable-next-line no-extra-boolean-cast
            // helperText={Boolean(errors.name) ? "This field is required." : null}
            // {...register("Labname", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="User Name"
            variant="filled"
            onChange={e => setUserName(e.target.value)}
          />

          <TextField
            // error={Boolean(errors.Labid)}
            // helperText={
            //   // eslint-disable-next-line no-extra-boolean-cast
            //   Boolean(errors.Labid) ? "This field is required." : null
            // }
            // {...register("Labid", { required: true, minLength: 3 })}
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
            // error={Boolean(errors.phonenumber)}
            // helperText={
            //   // eslint-disable-next-line no-extra-boolean-cast
            //   Boolean(errors.phonenumber) ? "This field is required." : null
            // }
            // {...register("phonenumber", { required: true, minLength: 3 })}
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
          // error={Boolean(errors.nationalid)}
          // helperText={
          //   // eslint-disable-next-line no-extra-boolean-cast
          //   Boolean(errors.nationalid) ? "This field is required." : null
          // }
          // {...register("nationalid", { required: true, minLength: 3 })}
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
              A Successful Update 🧡!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateTech;

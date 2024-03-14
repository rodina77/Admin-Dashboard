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
import React from "react";
import { useForm } from "react-hook-form";

const UpdataPopulation = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

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
        onSubmit={handleSubmit(onSubmit)}
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
            error={Boolean(errors.name)}
            // eslint-disable-next-line no-extra-boolean-cast
            helperText={Boolean(errors.name) ? "This field is required." : null}
            {...register("Labname", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Name"
            variant="filled"
          />

          <TextField
            error={Boolean(errors.Labid)}
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.Labid) ? "This field is required." : null
            }
            {...register("Labid", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Lab ID"
            type="number"
            variant="filled"
          />
        </Stack>

        <Stack sx={{ gap: 3 }} direction={"row"}>
          <TextField
            error={Boolean(errors.techid)}
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.techid) ? "This field is required." : null
            }
            {...register("techid", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Technical Id"
            type="number"
            variant="filled"
          />

          <TextField
            id="filled-number"
            sx={{ flex: 1 }}
            error={Boolean(errors.phonenumber)}
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.phonenumber) ? "This field is required." : null
            }
            {...register("phonenumber", { required: true, minLength: 3 })}
            label="Phone Number"
            type="number"
            variant="filled"
          />
        </Stack>

        <TextField
          id="filled-basic"
          sx={{ flex: 1 }}
          label="Address"
          variant="filled"
        />

        <TextField sx={{ flex: 1 }}
         label="National Id"             
         type="number"
         variant="filled" />

        <Stack sx={{ gap: 3 }} direction={"row"}>
          <TextField id="filled-basic" sx={{ flex: 1 }} label="Gender" variant="filled" />

          <TextField
            id="filled-basic"
            sx={{ flex: 1 }}
            label="Birthdate"
            type="date"
            variant="filled"
            InputLabelProps={{
                shrink: true,
              }}
          />
          <TextField
            id="filled-basic"
            sx={{ flex: 1 }}
            label="Blood type"
            variant="filled"
          />
        </Stack>

        <TextField
            id="filled-basic"
            sx={{ flex: 1 }}
            error={Boolean(errors.dnaseq)}
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.dnaseq) ? "This field is required." : null
            }
            {...register("dnaseq", { required: true, minLength: 3 })}
            label="Dna Sequence"
            variant="filled"
            InputLabelProps={{
                shrink: true,
              }}
          />


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
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              A Successful Update 🧡!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </div>
  );
};

export default UpdataPopulation;

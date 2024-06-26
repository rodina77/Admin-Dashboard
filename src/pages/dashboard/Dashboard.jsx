import { Stack, Typography, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row3 from "./Row3";
import Row2 from "./Row2";

// import { DownloadOutlined } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <Stack>
        <Typography
          sx={{
            fontFamily: "bold",
            fontSize: 45,
            mb: 1,
            color: theme.palette.info.dark,
          }}
        >
          DASHBOARD
        </Typography>
        <Typography sx={{ font: "bold ", fontSize: 20 }}>
          {" "}
          Welcome to your dashboard{" "}
        </Typography>
      </Stack>
      </Stack>
      <Row1 />
      <Row3 />
      <Row2 />
    </div>
  );
};

export default Dashboard;

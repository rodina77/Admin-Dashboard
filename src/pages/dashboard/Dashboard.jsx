import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";

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

      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;

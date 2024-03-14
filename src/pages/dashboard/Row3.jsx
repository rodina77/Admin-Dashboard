import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pieChart/pie";
import Bar from "../../pages/barChart/bar";
import Geo from "../../pages/geography/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={2} gap={2}>
      <Paper sx={{ flexGrow:1 , minWidth:"400px", width: "28%"}}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          Pie Chart
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Percentage of different categories in our data
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow:1 , minWidth:"400px", width: "33%" }}>
      <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          Percentage of the last five years
        </Typography>
        <Bar isDashboard= {true}/>
      </Paper>
      <Paper sx={{ flexGrow:1 , minWidth:"400px", width: "33%" }}>
        <Geo isDashboard= {true}/>
      </Paper>

    </Stack>
  );
};

export default Row3;

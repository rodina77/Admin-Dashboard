import { Stack, Typography, useTheme } from "@mui/material";
import Pie from "./pie";

const PieChart = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  return (
    <>
      <Stack>
        <Typography
          sx={{
            fontFamily: "bold",
            fontSize: 40,
            mb: 1,
            mt: 1,
            color: theme.palette.info.dark,
          }}
        >
          Pie Chart
        </Typography>
        <Typography sx={{ font: "bold , 40" }}>
          Percentage of different categories in our data
        </Typography>
      </Stack>
      <Pie />
    </>
  );
};

export default PieChart;

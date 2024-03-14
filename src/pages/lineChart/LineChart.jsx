import { useTheme , Stack, Typography, } from "@mui/material";
import Line from "./line";



const LineChart = () => {
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
          Line Chart
        </Typography>
        <Typography sx={{font: "bold , 40"}}> Percentage of different cases at the level of governmentes of the republic </Typography>
      </Stack>

   <Line/>
   </>

  );
};

export default LineChart;

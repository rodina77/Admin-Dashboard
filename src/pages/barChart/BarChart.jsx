import {  useTheme , Stack, Typography, } from "@mui/material";
import Bar from "./bar";



const BarChart = () => {
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
         Bar Chart
       </Typography>
       <Typography sx={{font: "bold , 40"}}> Percentage of missing people over the last five years </Typography>
     </Stack>
      <Bar/>
    </>
  );
};

export default BarChart;

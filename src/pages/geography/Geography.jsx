import { Stack, Typography, useTheme } from "@mui/material";

import Geo from "./geo";

const Geography = () => {
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
          Geography Chart
        </Typography>
        <Typography sx={{ font: "bold , 40" }}>
          {" "}
          Percentage of genomic over the world{" "}
        </Typography>
      </Stack>

      <Geo />
    </>
  );
};

export default Geography;

import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../pages/lineChart/line";
import { DownloadOutlined } from "@mui/icons-material";
import { resentoperation } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={2}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: 400}}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Different cases percentage
            </Typography>
            <Typography variant="body2" ml={4}>
              12.476
            </Typography>
          </Box>

          <Box sx={{ mr: 3 }}>
            <IconButton>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDashboard={true} />
      </Paper>

      <Box sx={{ flexGrow: 1, minWidth: "250px", height: 350 }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Operations
          </Typography>
        </Paper>

        {resentoperation.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Paper
              sx={{
                mt: 1, 
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight="600">
                 {item.txCase}
                </Typography>
                <Typography variant="body2">{item.user}</Typography>
              </Box>
              <Typography variant="body1">{item.date}</Typography>
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                {item.count}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;

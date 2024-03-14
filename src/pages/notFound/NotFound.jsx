
import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
    const theme = useTheme()
    return (

        <Box>
            <Typography align="center" color={theme.palette.error.main} variant="h5">
                Error
                <br/>
                 Please try again later.....
            </Typography>
        </Box>
    );
}

export default NotFound;

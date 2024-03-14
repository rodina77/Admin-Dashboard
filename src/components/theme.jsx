
//   import { blue } from "@mui/material/colors";


export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            //   bcColor:{main:"blue[900]" } 

          
          }
        : {
            // palette values for dark mode
            
          }),
    },
  });



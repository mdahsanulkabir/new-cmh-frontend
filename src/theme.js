import { createTheme } from "@mui/material";
import { green, orange, purple } from "@mui/material/colors";

export const theme = createTheme({
    
    palette: {
        mode : 'dark',
        primary: {
        main: "#ff4400",
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        tonalOffset: 0.2,
    },
});

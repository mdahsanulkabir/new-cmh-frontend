
import './App.css';
import { Box, Button, createTheme, Paper, ThemeProvider,  } from '@mui/material';
import { theme } from './theme';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        Hello
        <Paper sx={{width : '50%', marginInline: 'auto'}}> 
          <Box> 
            <Button variant='contained'>
                Primary
            </Button>
            <Button color='secondary' variant='contained'>
                Secondary
            </Button>
            <Button color='neutral' variant='contained'>
                Other
            </Button>
          </Box>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;

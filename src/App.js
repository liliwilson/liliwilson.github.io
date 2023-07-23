import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Grid, ThemeProvider, createTheme } from '@mui/material';
import { Router } from "@reach/router";

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  },
});




function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <ResponsiveAppBar /> */}
        <Grid container className="main-grid">
          <Grid item xs={8}>
            <Router>
              <AboutMe path="/"/>
              <Projects path="/projects"/>
            </Router>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;

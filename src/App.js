import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import SocialBar from "./components/SocialBar";
import { Grid, Box, Hidden } from "@mui/material";

import { Tabs, TabList, Tab, TabPanel, tabClasses } from "@mui/joy";

const tabStyle = {
  color: "white",
  background: `linear-gradient(
        to right,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      linear-gradient(
        to right,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 1)
    )`,
  backgroundSize: "100% 2px, 0 2px",
  backgroundPosition: "100% 100%, 0 100%",
  backgroundRepeat: "no-repeat",
  transition: `background-size 400ms`,
  "&:hover": {
    color: "white",
    backgroundColor: `rgba(255,255,255,0.2)`,
    backgroundSize: "0 2px, 100% 2px",
  },
};


function App() {
  
  return (
    <div className="App">
      {/* DESKTOP VIEW */}
      <Hidden smDown>
        <Tabs
          aria-label="Basic tabs"
          defaultValue={0}
          sx={{ backgroundColor: "transparent" }}
          orientation="vertical"
        >
          <Box width="20vw">
            <Grid
              height="100vh"
              container
              direction="column"
              justifyContent="space-between"
              paddingX="1rem"
              sx={{ backgroundColor: `rgba(255,255,255,0.05)` }}
            >
              <Grid item>
                <TabList
                  variant="plain"
                  sx={{
                    [`& .${tabClasses.root}`]: {
                      boxShadow: "none",
                      fontWeight: "md",
                    },
                    [`& .${tabClasses.selected}`]: {
                      boxShadow: "none",
                      fontWeight: "lg",
                      backgroundColor: `rgba(255,255,255,0.2)`,
                    },
                    margin: "5vh 0",
                  }}
                >
                  <Tab sx={tabStyle}>home</Tab>
                  <Tab sx={tabStyle}>experience</Tab>
                  <Tab sx={tabStyle}>projects</Tab>
                </TabList>
              </Grid>
              <Grid item sx={{ paddingBottom: "2rem" }}>
                <SocialBar />
              </Grid>
            </Grid>
          </Box>

          <Box width="80vw" height="90vh" marginY="5vh" marginX="2rem">
            <TabPanel value={0} sx={{ p: 2 }}>
              <AboutMe />
            </TabPanel>
            <TabPanel value={1} sx={{ p: 2 }}>
              <Experience />
            </TabPanel>
            <TabPanel value={2} sx={{ p: 2 }}>
              <Projects />
            </TabPanel>
          </Box>
        </Tabs>
      </Hidden>

      {/* MOBILE VIEW */}
      <Hidden smUp>
        <Tabs
          aria-label="Basic tabs"
          defaultValue={0}
          sx={{ backgroundColor: "transparent" }}
          orientation="horizontal"
        >
          <Box width="100vw">
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              padding="1rem"
            >
              <Grid item>
                <TabList
                  variant="plain"
                  sx={{
                    [`& .${tabClasses.root}`]: {
                      boxShadow: "none",
                      fontWeight: "md",
                    },
                    [`& .${tabClasses.selected}`]: {
                      boxShadow: "none",
                      fontWeight: "lg",
                      backgroundColor: `rgba(255,255,255,0.2)`,
                    },
                  }}
                >
                  <Tab sx={tabStyle}>home</Tab>
                  <Tab sx={tabStyle}>experience</Tab>
                  <Tab sx={tabStyle}>projects</Tab>
                </TabList>
              </Grid>
            </Grid>
          </Box>

          <Box width="80vw" height="90vh" marginX="2rem">
            <TabPanel value={0} sx={{ p: 2 }}>
              <AboutMe />
            </TabPanel>
            <TabPanel value={1} sx={{ p: 2 }}>
              <Experience />
            </TabPanel>
            <TabPanel value={2} sx={{ p: 2 }}>
              <Projects />
            </TabPanel>
          </Box>
        </Tabs>
        <Box sx={{ paddingBottom: "1rem" }}>
          <SocialBar />
        </Box>
      </Hidden>
    </div>
  );
}

export default App;

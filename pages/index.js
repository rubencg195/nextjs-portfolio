import Typewriter from "typewriter-effect";
import { Box, Typography, Button, Link } from '@mui/material';
import SideDrawer from "../components/navigation/side-drawer"
import ParticleBackground from '../components/effects/particle-background';

const HomePage = () => {
    const drawerWidth = 240;
    const backgroundColor = "#000000"
    const fullScreenStyle = { width: "100%", minHeight: "100vh" }
    const contentCenterStyle = { display: "flex", justifyContent: "center", alignItems: "center" }

    return <SideDrawer
        selectedItemKey={'home'}
        drawerWidth={drawerWidth}
        style={{ bgcolor: backgroundColor, ...fullScreenStyle }} >
        <ParticleBackground />
        <Box sx={{ ...contentCenterStyle, ...fullScreenStyle }}>
            <Box>
                <Box xs={{ display: "block" }}>
                    <Typography color="white" variant='h1' sx={{ display: "inline" }} >Hi, my name is  </Typography>
                    <Typography color="white" variant='h1' fontWeight={900} sx={{ display: "inline" }}>Ruben </Typography>
                </Box>
                <Box xs={{ display: "block" }}>
                    <Typography color="white" variant='h2' fontWeight={900} sx={{ display: "inline" }}>I am a </Typography>
                    <Typography color="white" variant='h2' sx={{ display: "inline" }}>
                        <Typewriter
                            component="span"
                            options={{ loop: true }}
                            sx={{ display: "inline", p: 0, m: 0 }}
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDeleteSpeed(1)
                                    .changeDelay(1)
                                    .typeString("Software Engineer")
                                    .pauseFor(200)
                                    .deleteAll()
                                    .changeDeleteSpeed(1)
                                    .typeString("Mechatronic Engineer")
                                    .pauseFor(200)
                                    .deleteAll()
                                    .changeDeleteSpeed(1)
                                    .typeString("MLOps Developer")
                                    .pauseFor(200)
                                    .deleteAll()
                                    .changeDeleteSpeed(1)
                                    .typeString("Fullstack developer")
                                    .pauseFor(200)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </Typography>
                </Box>
                <Box xs={{ display: "block" }}>
                    <Link href="contact"><Button variant="outlined" sx={{ display: "inline", px: 6, py: 3, mt: 2, fontSize: 25 }}>Contact me</Button></Link>
                    <Link href="contact"><Button variant="outlined" sx={{ display: "inline", px: 6, py: 3, mt: 2, fontSize: 25, ml: 3, borderColor: "white", color: "white" }}>Download Resume</Button></Link>
                </Box>
            </Box>

        </Box>
    </SideDrawer>
}

export default HomePage;
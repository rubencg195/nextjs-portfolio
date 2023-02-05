import { Box, List, ListItem } from '@mui/material';
import SideDrawer from "../components/navigation/side-drawer"
import ParticleBackground from '../components/effects/particle-background';
import useWindowSize from '../hooks/use-window-size';
import InfoCard from '../components/widgets/info-card';

const EducationPage = ({ }) => {
    const drawerWidth = 240;
    const backgroundColor = "#000000"
    const fullScreenStyle = { width: "100%", minHeight: "100vh" }
    const contentCenterStyle = { display: "flex", justifyContent: "center", alignItems: "center" }

    const { width, height } = useWindowSize();
    const workListWidth = width ? width - drawerWidth - 100 : 500;
    const workListHeight = height ? height * 0.9 : 300;

    return <SideDrawer
        drawerWidth={drawerWidth}
        selectedItemKey={'education'}
        style={{ bgcolor: backgroundColor, ...fullScreenStyle }} >
        <ParticleBackground />
        <Box sx={{ ...contentCenterStyle, ...fullScreenStyle }}>
            <List>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
                <ListItem><InfoCard width={workListWidth} /></ListItem>
            </List>
        </Box>
    </SideDrawer>
}

export default EducationPage;
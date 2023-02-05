import { Box, Paper, Typography } from '@mui/material';
import SideDrawer from "../../components/navigation/side-drawer"
import ParticleBackground from '../../components/effects/particle-background';
import Card from '../../components/widgets/card';
import useWindowSize from '../../hooks/use-window-size';

const AdminPage = () => {
  const drawerWidth = 240;
  const backgroundColor = "#000000"
  const fullScreenStyle = { width: "100%", minHeight: "100vh" }
  const contentCenterStyle = { display: "flex", justifyContent: "center", alignItems: "center" }

  const {width, height} = useWindowSize();
  const cardWidth = width ? width - drawerWidth - 100 : 500;
  const cardHeight = height ? height / 2 : 300;

  return <SideDrawer
    drawerWidth={drawerWidth}
    selectedItemKey={'about'}
    style={{ bgcolor: backgroundColor, ...fullScreenStyle }} >
    <ParticleBackground />
    <Box sx={{ ...contentCenterStyle, ...fullScreenStyle }}>
    <Paper sx={{
                p: 2,
                margin: 'auto',
                height: cardHeight,
                width: cardWidth,
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}>
                        <Typography variant='h3'>Admin</Typography>
            </Paper>
    </Box>
  </SideDrawer>
}

export default AdminPage;
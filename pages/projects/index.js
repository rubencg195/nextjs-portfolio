import { Box } from '@mui/material';
import SideDrawer from "../../components/navigation/side-drawer"
import ParticleBackground from '../../components/effects/particle-background';
import useWindowSize from '../../hooks/use-window-size';
import ImageGallery from '../../components/widgets/image-gallery';

const ProjectsPage = ({}) => {
    const drawerWidth = 240;
    const backgroundColor = "#000000"
    const fullScreenStyle = { width: "100%", minHeight: "100vh" }
    const contentCenterStyle = { display: "flex", justifyContent: "center", alignItems: "center" }
  
    const {width, height} = useWindowSize();
    const galleryWidth = width ? width - drawerWidth - 100 : 500;
    const galleryHeight = height ? height * 0.9 : 300;
  
    return <SideDrawer
      drawerWidth={drawerWidth}
      selectedItemKey={'projects'}
      style={{ bgcolor: backgroundColor, ...fullScreenStyle }} >
      <ParticleBackground />
      <Box sx={{ ...contentCenterStyle, ...fullScreenStyle }}>
        < ImageGallery width={galleryWidth} height={galleryHeight} />
      </Box>
    </SideDrawer>
}

export default ProjectsPage;
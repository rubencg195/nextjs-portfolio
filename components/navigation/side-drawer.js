import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ItemList from './side-drawer-item-list';
import SideDrawerProfilePictureHeader from './side-drawer-profile-picture-header';
import {Home as HomeIcon, Person as PersonIcon, EmojiEvents as EmojiEventsIcon, Assignment as AssignmentIcon, Call as CallIcon, Download as DownloadIcon, School as SchoolIcon, Work as WorkIcon, Collections as CollectionsIcon} from '@mui/icons-material';

const SideDrawer = ({ children, style, drawerWidth, selectedItemKey}) => {
    let itemList = {
        home: { text: "Home", icon: <HomeIcon />, route: "/" },
        about: { text: "About", icon: <PersonIcon />, route: "/about" },
        work: { text: "Work Experience", icon: <WorkIcon />, route: "/work" },
        education: { text: "Education", icon: <SchoolIcon />, route: "/education" },
        awards: { text: "Awards & Distinctions", icon: <EmojiEventsIcon />, route: "/awards" },
        projects:  { text: "Projects", icon: <AssignmentIcon />, route: "/projects" },
        gallery: { text: "Gallery", icon: <CollectionsIcon />, route: "/gallery" },
        contact: { text: "Contact Me", icon: <CallIcon />, route: "/contact" },
        download: { text: "Download Resume", icon: <DownloadIcon />, route: "/download" }
    }
    const styles = {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        }
    }
    if(selectedItemKey != null)
        itemList[selectedItemKey] = {...itemList[selectedItemKey], selected : true}

    return  <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer sx={styles} variant="permanent" anchor="left">
                <SideDrawerProfilePictureHeader  drawerWidth={drawerWidth}/>
                <Divider/>
                <ItemList itemList={itemList} />
            </Drawer>
            <Box component="main" sx={style}>
                {children}
            </Box>
        </Box>
}

export default SideDrawer;
import { Box, Avatar, Grid, Typography } from "@mui/material"
import { GitHub as GithubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon, Instagram as InstagramIcon } from '@mui/icons-material';

const SideDrawerProfilePictureHeader = ({ drawerWidth }) => {
    return <Box sx={{
        width: drawerWidth,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        my: 3,
        textAlign: 'center',
    }}>
        <Grid container spacing={2} minHeight={160}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Avatar
                    alt="Ruben Chevez-Guardado"
                    src="https://rubencg195.github.io/images/profile/profile.jpeg"
                    sx={{ width: 200, height: 200 }}
                />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography>Ruben Chevez-Guardado</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography>Software Engineer</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Grid container spacing={2} sx={{px: 5}} >
                    <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                        <LinkedInIcon />
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                        <GithubIcon />
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                        <TwitterIcon />
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                        <InstagramIcon />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}

export default SideDrawerProfilePictureHeader;
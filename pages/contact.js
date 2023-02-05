import { useState, MouseEvent } from 'react';
import { Box, Paper, Input, FilledInput, OutlinedInput, InputLabel, InputAdornment, FormHelperText, FormControl, TextField } from '@mui/material';
import SideDrawer from "../components/navigation/side-drawer"
import ParticleBackground from '../components/effects/particle-background';
import useWindowSize from '../hooks/use-window-size';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ContactPage = () => {
    const drawerWidth = 240;
    const backgroundColor = "#000000"
    const fullScreenStyle = { width: "100%", minHeight: "100vh" }
    const contentCenterStyle = { display: "flex", justifyContent: "center", alignItems: "center" }

    const { width, height } = useWindowSize();
    const cardWidth = width ? width - drawerWidth - 100 : 500;
    const cardHeight = height ? height / 2 : 300;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return <SideDrawer
        drawerWidth={drawerWidth}
        selectedItemKey={'contact'}
        style={{ bgcolor: backgroundColor, ...fullScreenStyle }} >
        <ParticleBackground />
        <Box sx={{ ...contentCenterStyle, ...fullScreenStyle }}>
            <Paper sx={{
                p: 2,
                margin: 'auto',
                width: cardWidth,
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}>
                <FormControl sx={{ m: 1, width: '54ch' }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, width: '50ch' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </Paper>
        </Box>
    </SideDrawer>
}

export default ContactPage;
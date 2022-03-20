import React, { useEffect, useState, useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { getSizeSettings } from "../api/PaintingApi";

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [siteInfo, setSiteInfo] = useState({});

    useEffect(() => {
        getSizeSettings()
            .then((data) => {
                setSiteInfo(data);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }, []);

    return (
        <div className='Nav-Bar'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='secondary' sx={{height:'80px'}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="Home"
                            sx={{
                                mr: 2,
                            }}
                            onClick={() => setActive('home')}
                        >
                            <Link to='/' className='Nav-Link' >
                                <img className='Site-Logo' src={siteInfo.logo} alt='App Logo' />
                            </Link>
                        </IconButton >
                        <Typography variant="h6" component="div" sx={{mr: 2}} onClick={() => setActive('artists')}>
                            <Link  
                                to='/artists' 
                                className='Nav-Link' 
                                
                                // style={{
                                //     marginBottom: '14px',
                                //     borderBottom: active === 'artists' ? '5px solid black' : '',
                                //     color: active === 'artists' ? '5px solid black' : '',
                                // }}
                            >Artists</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{mr: 2}} onClick={() => setActive('exhibitions')}>
                            <Link 
                                to='/exhibitions'
                                className='Nav-Link'
                                
                                // style={{
                                //     borderBottom: active === 'exhibitions' ? '5px solid black' : '',
                                //     color: active === 'exhibitions' ? '5px solid black' : '',
                                // }}
                            >Exhibitions</Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={() => setActive('paintings')}>
                            <Link 
                                to='/paintings'
                                className='Nav-Link'
                                
                                // style={{
                                //     borderBottom: active === 'exhibitions' ? '5px solid black' : '',
                                //     color: active === 'exhibitions' ? '5px solid black' : '',
                                // }}
                            >Paintings</Link>
                        </Typography>
                        <Button color='inherit' onClick={() => setActive('signup')}>
                            <Link 
                                to='/signup'
                                className='Nav-Link'
                                // style={{
                                //     borderBottom: active === 'signup' ? '5px solid black' : '',
                                //     color: active === 'signup' ? '5px solid black' : '',
                                // }}
                            >Sign Up</Link>
                        </Button>
                        <Button color='inherit' onClick={() => setActive('login')}>
                            <Link 
                                to='/login'
                                className='Nav-Link'
                                // style={{
                                //     borderBottom: active === 'login' ? '5px solid black' : '',
                                //     color: active === 'login' ? '5px solid black' : '',
                                // }}
                            >Log In</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        
    );
}
  
export default Navbar;
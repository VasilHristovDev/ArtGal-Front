import React, { useEffect, useState, useContext, createContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { getSizeSettings } from "../api/PaintingApi";
import { logOut } from '../api/UserApi';

const Navbar = () => {
    const token = sessionStorage.getItem('token');

    const [active, setActive] = useState('home');
    const [siteInfo, setSiteInfo] = useState({});
    const [stateToken, setStateToken] = useState(token);


    const handleLogout = () => {
        logOut();
        setStateToken('');
    }

    const handleHomePage = () => {
        setActive('home');
    }

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
                            onClick={handleHomePage}
                        >
                            <Link to='/' className='Nav-Link' >
                                <img className='Site-Logo' src={siteInfo.logo} alt='App Logo' />
                            </Link>
                        </IconButton >
                        <Typography variant="h6" component="div" sx={{mr: 2}} onClick={() => setActive('artists')}>
                            <Button color='inherit' onClick={() => setActive('artists')}>
                                <Link  
                                    to='/artists' 
                                    className='Nav-Link' 
                                    style={{
                                        color: active === 'artists' ? 'red' : '',
                                    }}
                                >Artists</Link>
                            </Button>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{mr: 2}} onClick={() => setActive('exhibitions')}>
                            <Button color='inherit' onClick={() => setActive('exhibitions')}>
                                <Link 
                                    to='/exhibitions'
                                    className='Nav-Link'
                                    style={{
                                    
                                        color: active === 'exhibitions' ? 'red' : '',
                                    }}
                                >Exhibitions</Link>
                                </Button>
                            </Typography>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={() => setActive('paintings')}>
                            <Button color='inherit' onClick={() => setActive('paintings')}>
                                <Link 
                                    to='/paintings'
                                    className='Nav-Link'
                                    
                                    style={{
                                    
                                        color: active === 'paintings' ? 'red' : '',
                                    }}
                                >Paintings</Link>
                            </Button>
                        </Typography>
                        {!stateToken && 
                            <>
                                <Button color='inherit' onClick={() => setActive('signup')}>
                                    <Link 
                                        to='/signup'
                                        className='Nav-Link'
                                        style={{
                                        
                                            color: active === 'signup' ? 'red' : '',
                                        }}
                                    >Sign Up</Link>
                                </Button>
                                <Button color='inherit' onClick={() => setActive('login')}>
                                    <Link 
                                        to='/login'
                                        className='Nav-Link'
                                        style={{
                                        
                                            color: active === 'login' ? 'red' : '',
                                        }}
                                    >Log In</Link>
                                </Button>
                            </>
                        }
                        {stateToken && 
                            <>
                                <Button color='inherit' onClick={handleLogout}>
                                    <Link to='/' className='Nav-Link'>Log Out</Link>
                                </Button>
                            </>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        
    );
}
  
export default Navbar;
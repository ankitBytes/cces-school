import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import logo from '../../img/logo.png'


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" style={{ background: '#00aeef' }} >
                <Toolbar className='d-flex justify-content-between px-lg-5'>
                    <img src={logo} alt='logo' width={200} height={100} />
                    {
                        (window.location.pathname.includes('/survey')) ?
                            <>
                                <Link to={{ pathname: "/" }}>
                                    <Button variant="outlined" style={{ color: "white", borderWidth: "4px", borderColor: "white" }}>Home</Button>
                                </Link>
                            </>
                            :
                            <>
                                <Link to={{ pathname: "/survey", hash: "sectionA" }}>
                                    <Button variant="outlined" style={{ color: "white", borderWidth: "4px", borderColor: "white" }}>Take Survey</Button>
                                </Link>
                            </>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}
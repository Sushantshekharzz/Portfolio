import React, { useState } from 'react'
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Typography } from '@mui/material';




export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    const toggleDrawer = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <Box
                sx={{
                    display: { md: 'none', xs: 'flex' },
                    backgroundColor: 'rgba(138, 38, 210, 0.73)', // Same background color as web navbar
                    width: '100%', // Full width
                    paddingInline: 1, // Add horizontal padding
                    justifyContent: 'flex-end',
                    boxSizing: 'border-box', // Ensure padding doesn't add to the width

                    position: 'fixed', top: 0,
                    height: 52
                }}
                onClick={toggleDrawer}
            >
                <MenuIcon sx={{ fontSize: 50, marginLeft: 1, color: 'white' }} />
            </Box>
            <Box sx={{ position: 'fixed', top: 0, backgroundColor: 'rgba(138, 38, 210, 0.07)', display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'flex-start', width: '100%', height: 90, alignItems: 'center' }}>
                <Box
                    sx={{ width: '100%', paddingLeft: 4 }}>
                    <Typography
                        sx={{
                            fontFamily: 'Raleway,serif', color: "#c770f0", fontWeight: 1000, fontSize: 30,
                        }}
                    >SS.</Typography>
                </Box>
                <Box sx={{ display: { md: 'flex' }, justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>
                    <HomeIcon sx={{ marginRight: 1, color: 'white' }} />
                    <Link href="/" sx={{ color: 'white', marginRight: 10, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: 20 }}>Home</Link>
                    <AccountCircleIcon sx={{ marginRight: 1, color: 'white' }} />
                    <Link href="/about" sx={{ color: 'white', marginRight: 10, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: 20 }}>About</Link>
                    <LiveTvIcon sx={{ marginRight: 1, color: 'white' }} />
                    <Link href="/projects" sx={{ color: 'white', marginRight: 10, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: 20 }}>Projects</Link>
                    <ContentPasteIcon sx={{ marginRight: 1, color: 'white' }} />
                    <Link href="/resume" sx={{ color: 'white', marginRight: 10, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: 20 }}>Resume</Link>
                </Box>
            </Box>

            <Drawer open={toggle} onClose={toggleDrawer} anchor='top'>
                <List sx={{ backgroundColor: '#6f42c1', }}>
                    <ListItem >
                        <ListItemButton href='/'>
                            <ListItemIcon>
                                <HomeIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ color: 'white', fontFamily: 'Roboto, sans-serif' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton href='/about'>
                            <ListItemIcon>
                                <AccountCircleIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="About" sx={{ color: 'white', fontFamily: 'Roboto, sans-serif' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton href='/projects'>
                            <ListItemIcon>
                                <LiveTvIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Projects" sx={{ color: 'white', fontFamily: 'Roboto, sans-serif' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton href='/resume'>
                            <ListItemIcon>
                                <ContentPasteIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary="Resume" sx={{ color: 'white', fontFamily: 'Roboto, sans-serif' }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

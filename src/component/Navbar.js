import React, { useState } from 'react'
import { Box } from '@mui/material';
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




export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    const toggleDrawer = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <Box
                sx={{ display: { md: 'none' }, backgroundColor: '#6f42c1', height: 52 }}
                onClick={toggleDrawer}
            >
                <MenuIcon sx={{ fontSize: 50, marginLeft: 1, color: 'white' }} />
            </Box>
            <Box sx={{ position: 'fixed', top: 0, backgroundColor: '#6f42c1', display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'flex-end', width: '100%', height: 90, alignItems: 'center' }}>
                <HomeIcon sx={{ marginRight: 1, color: 'white' }} />
                <Link href="/" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>Home</Link>
                <AccountCircleIcon sx={{ marginRight: 1, color: 'white' }} />
                <Link href="/about" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>About</Link>
                <LiveTvIcon sx={{ marginRight: 1, color: 'white' }} />
                <Link href="/projects" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>Projects</Link>
                <ContentPasteIcon sx={{ marginRight: 1, color: 'white' }} />
                <Link href="/resume" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>Resume</Link>
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

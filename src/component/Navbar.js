import React from 'react'
import './navbar.css'
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function Navbar() {
    return (
        <Box sx={{ position:'fixed',  backgroundColor: '#6f42c1', display: 'flex', justifyContent: 'flex-end', width: '100%', height: 90, alignItems: 'center' }}>
            <HomeIcon sx={{ marginRight: 1, color: 'white' }} />
            <Link href="/" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>Home</Link>
            <AccountCircleIcon sx={{ marginRight: 1, color: 'white' }} />
            <Link href="/about" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>About</Link>
            <LiveTvIcon sx={{ marginRight: 1, color: 'white' }} />
            <Link href="/projects" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>Projects</Link>
            <ContentPasteIcon sx={{ marginRight: 1, color: 'white' }} />
            <Link href="/resume" sx={{ color: 'white', marginRight: 5, textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 800 }}>Resume</Link>
        </Box>
    )
}

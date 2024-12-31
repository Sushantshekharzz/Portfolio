import React from 'react'
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <Box sx={{
            backgroundColor: '#0a0416', display: 'flex', flexDirection: { md: 'row', xs: 'column' }, alignItems: { xs: 'center', md: 'center' }, justifyContent: { xs: 'center', md: 'space-between' }, minHeight: 'auto', wordBreak: { xs: 'break-word', md: 'break-word' }, // Forces long words to break 
            padding: { md: 2, xs: 4 },
        }}>
            <Box sx={{ marginTop: { xs: 2, md: 0 }, marginLeft: { xs: 0, md: 2 }, textAlign: { md: 'left', xs: 'center' }, width: '100%' }}>
                <Typography
                    sx={{
                        fontFamily: "Roboto Condensed", fontSize: 20, color: 'white',
                    }}
                >Designed and Developed  by Sushant Shekhar</Typography>
            </Box>
            <Box sx={{ marginTop: { xs: 2, md: 0 }, width: '100%', textAlign: { md: 'center', textAlign: 'center' } }}>
                <Typography
                    sx={{
                        fontFamily: "Roboto Condensed", fontSize: 20, color: 'white',
                    }}
                >Copyright © 2025 SS</Typography>
            </Box>
            <Box sx={{ marginTop: { xs: 2, md: 0 }, marginRight: { md: 5, xs: 0 }, width: '100%', textAlign: { md: 'right', textAlign: 'center' } }}>
                <a href="https://www.linkedin.com/in/sushant-shekhar-6709311a1" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: 28, color: 'white', marginRight: 4 }} />
                </a>
                <a href="https://github.com/Sushantshekharzz" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ fontSize: 28, color: 'white', }} />
                </a>
            </Box>
        </Box>
    )
}

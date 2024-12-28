import React from 'react';
import { Box } from '@mui/material';
import backgroundImage from "../image/backgroundImage.png"
import study from "../image/study.png"
import HandshakeAnimation from '../animation/HandSakeAnimation';

export default function Home() {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`, height: '100%',
                backgroundSize: 'cover', // Ensure the image covers the entire container
                backgroundAttachment: 'fixed', // Desktop: Fixed background
                backgroundPosition: 'center', // Center the background image
            }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', height: '100vh', padding: { md: 4, xs: 5 },
                    // whiteSpace: { xs: 'nowrap', md: 'normal' },
                    wordWrap: { xs: 'break-word', md: 'break-word' },// Prevent wrapping on mobile, allow on desktop
                    // overflowX: { xs: 'auto', md: 'visible' }, // Horizontal scroll for mobile, no scroll for desktop
                }}>
                    <Box sx={{
                        padding: { md: 4, xs: 5 },
                        maxWidth: { xs: '100%', md: '500px' }, // Full width on mobile, limited on desktop
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box
                                sx={{
                                    fontFamily: 'Raleway,serif!important', fontSize: '2.4em!important', color: 'white',
                                }}
                            >Hi There!</Box>
                            <Box sx={{
                                marginBottom: 1, marginLeft: 2
                            }}>
                                <HandshakeAnimation />
                            </Box>
                        </Box>
                        <Box
                            sx={{ fontFamily: 'Raleway,serif!important', fontSize: '2.4em!important', color: 'white', paddingTop: 8 }}
                        >I'M <span style={{ color: "rgb(138, 38, 210)", fontWeight: 1000 }}>Sushant Shekhar</span></Box>
                    </Box>
                    <Box sx={{
                        padding: { md: 4, xs: 5 },
                        maxWidth: { xs: '100%', md: '500px' }, // Full width on mobile, limited on desktop
                    }}>
                        <img src={study} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

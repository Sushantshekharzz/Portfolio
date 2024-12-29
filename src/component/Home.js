import React from 'react';
import { Box } from '@mui/material';
import backgroundImage from "../image/backgroundImage.png"
import study from "../image/study.png"
import HandshakeAnimation from '../animation/HandSakeAnimation';
import InfiniteMultiLineAnimation from '../animation/InfiniteMultiLineAnimation';

export default function Home() {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', // Ensure the image covers the entire container
                backgroundAttachment: 'fixed', // Desktop: Fixed background
                backgroundPosition: 'center', // Center the background image
            }}>
                <Box sx={{
                    display: 'flex', alignItems: {xs:'flex-start', md:'center'}, flexDirection: { xs: 'column', md: 'row' }, justifyContent: {xs:'flex-start', md:'center'}, minHeight: '100vh', padding: { md: 1},  paddingInline: { xs: 3,  md: 8 },  paddingTop:{xs:20},
                    // whiteSpace: { xs: 'nowrap', md: 'normal' },
                    // wordWrap: { xs: 'normal', md: 'break-word' },// Prevent wrapping on mobile, allow on desktop
                    // overflowX: { xs: 'auto', md: 'visible' }, // Horizontal scroll for mobile, no scroll for desktop
                    wordBreak: {xs:'break-word', md:'break-word'}, // Forces long words to break                 
                    // overflowX: { xs: 'auto', md: 'normal' }, // Horizontal scroll for mobile, no scroll for desktop
                }}>
                    <Box sx={{
                        maxWidth: { xs: '100%', md: '500px' }, // Full width on mobile, limited on desktop
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start', // Ensures horizontal alignment starts at the left
                        flexDirection: { xs: 'column', md: 'column' }
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Box
                                sx={{
                                    fontFamily: 'Raleway,serif!important', fontSize: 40, color: 'white',
                                }}
                            >Hi There!</Box>
                            <Box sx={{
                                marginBottom: 1, marginLeft: { xs: 0, md: 2 }
                            }}>
                                <HandshakeAnimation />
                            </Box>
                        </Box>
                        <Box
                            sx={{ fontFamily: 'Raleway,serif!important', fontSize: 40, color: 'white',paddingTop:{xs:3, md:1 }}}
                        >I'M <span style={{ color: "rgb(138, 38, 210)", fontWeight: 1000 }}>Sushant Shekhar</span></Box>
                        <Box sx={{
                            fontFamily: 'Raleway,serif!important',  color: 'white', paddingTop: 9
                            ,fontWeight: 1000, fontSize: {xs:20, md:40}
                        }}
                        >
                            <InfiniteMultiLineAnimation />
                        </Box>
                    </Box>
                    <Box sx={{
                        paddingTop:{xs:10},
                        padding: { md: 4 },
                        maxWidth: { xs: '100%', md: '500px' }, // Full width on mobile, limited on desktop
                    }}>
                        <img src={study} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>
                <Box>
                <Box sx={{
                        paddingTop:{xs:10},
                        padding: { md: 4 },
                        maxWidth: { xs: '100%', md: '500px' }, // Full width on mobile, limited on desktop
                    }}>
                        <img src={study} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{
                        paddingTop:{xs:10},
                        padding: { md: 4 },
                        maxWidth: { xs: '100%', md: '500px' }, // Full width on mobile, limited on desktop
                    }}>
                        <img src={study} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

import React from 'react';
import { Box, Typography } from '@mui/material';
import Introduction from "../../image/Introduction.png"
import backgroundImage from "../../image/backgroundImage.png"
import study from "../../image/study.png"
import HandshakeAnimation from '../../animation/HandSakeAnimation';
import InfiniteMultiLineAnimation from '../../animation/InfiniteMultiLineAnimation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Box sx={{
                backgroundImage: `url(${backgroundImage})`, minHeight: '100vh',
                backgroundSize: 'cover', // Ensure the image covers the entire container
                backgroundAttachment: 'fixed', // Desktop: Fixed background
                backgroundPosition: 'center', // Center the background image
                paddingInline: { xs: 5, md: 8 },
                wordBreak: { xs: 'break-word', md: 'break-word' }, // Forces long words to break 
                paddingBottom: 10
            }}>
                <Box sx={{
                    display: 'flex', alignItems: { xs: 'flex-start', md: 'center' }, flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'flex-start', md: 'space-around' }, minHeight: '100%', paddingTop: { xs: 20, md: 22 },
                    // whiteSpace: { xs: 'nowrap', md: 'normal' },
                    // wordWrap: { xs: 'normal', md: 'break-word' },// Prevent wrapping on mobile, allow on desktop
                    // overflowX: { xs: 'auto', md: 'visible' }, // Horizontal scroll for mobile, no scroll for desktop
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
                            <Typography
                                sx={{
                                    fontFamily: "Raleway,serif", fontSize: 40, color: 'white',
                                }}
                            >Hi There!</Typography>
                            <Box sx={{
                                marginBottom: 1, marginLeft: { xs: 0, md: 2 }
                            }}>
                                <HandshakeAnimation />
                            </Box>
                        </Box>
                        <Typography
                            sx={{ fontFamily: 'Raleway,serif', fontSize: 40, color: 'white', paddingTop: { xs: 3, md: 1 }, textAlign: 'left' }}
                        >I'M <Typography component="span" sx={{ fontFamily: 'Raleway,serif', color: "#c770f0", fontSize: 40, }}>Sushant Shekhar</Typography></Typography>
                        <Box sx={{
                            fontFamily: 'Raleway,serif', color: 'white', paddingTop: 9
                            , fontSize: { xs: 20, md: 40 }
                        }}
                        >
                            <InfiniteMultiLineAnimation />
                        </Box>
                    </Box>
                    <Box sx={{
                        paddingTop: { xs: 10 },
                        // padding: { md: 4 },
                        maxWidth: { xs: '100%', md: '500px' }, // Full width on mobile, limited on desktop
                    }}>
                        <img src={study} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: { xs: 10, md: 10 } }}>
                    <Typography sx={{ fontFamily: 'Raleway,serif', fontSize: 40, color: 'white', textAlign: 'center' }} >LET ME <Typography component="span" sx={{ fontFamily: 'Raleway,serif', color: '#c770f0', fontSize: 40, }}>INTRODUCE</Typography> MYSELF</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { md: 'row', xs: 'column' }, alignItems: 'center', paddingTop: { md: 1, xs: 5 } }}>
                        <Box >
                            <Typography sx={{ fontFamily: 'Roboto Condensed', color: 'white', fontSize: 25, marginTop: 4 }}>I fell in love with <Typography variant='span' sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontSize: 25, fontStyle: 'italic' }}> Programming </Typography>and I have at least learnt something, I think… 🤷‍♂️</Typography>
                            <Typography sx={{ fontFamily: 'Roboto Condensed', color: 'white', fontSize: 25, marginTop: 4 }}>Skilled in developing dynamic, and robust web applications with <Typography variant='span' sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontSize: 25, fontStyle: 'italic' }}>React.js</Typography> for frontend and  <Typography variant='span' sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontSize: 25, fontStyle: 'italic' }}>Node.js</Typography> for backend development.</Typography>
                            <Typography sx={{ fontFamily: 'Roboto Condensed', color: 'white', fontSize: 25, marginTop: 4 }}>Expert in integrating and managing both<Typography variant='span' sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontSize: 25, fontStyle: 'italic' }}> SQL and NoSQL Databases </Typography >for optimized data storage and retrieval.</Typography>
                            <Typography sx={{ fontFamily: 'Roboto Condensed', color: 'white', fontSize: 25, marginTop: 4 }}>Passionate about building<Typography variant='span' sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontSize: 25, fontStyle: 'italic' }}> User-Centric and Scalable Solutions</Typography>  with a focus on<Typography variant='span' sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontSize: 25, fontStyle: 'italic' }}> Performance and Maintainability.</Typography> </Typography>
                        </Box>
                        <Box sx={{ paddingTop: { xs: 8 } }}>
                            <img alt="" src={Introduction} style={{ height: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: 'Raleway,serif', fontSize: 40, color: 'white', paddingTop: { xs: 10, md: 10 }, textAlign: 'center' }} >FIND ME ON</Typography>
                    <Typography sx={{ fontFamily: 'Roboto Condensed', fontSize: 20, color: 'white', paddingTop: { xs: 1, md: 1 }, textAlign: 'center' }} >Feel free to <Typography variant='span' sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontSize: 25, }}>connect</Typography> with me</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingTop: 4 }}>
                        <a href="https://www.linkedin.com/in/sushant-shekhar-6709311a1" target="_blank" rel="noopener noreferrer">
                            <Box sx={{
                                borderRadius: '50%', // Make it round (50% of width/height)
                                backgroundColor: 'white',
                                height: 45,
                                width: 45,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 4
                            }}>
                                <LinkedInIcon sx={{ fontSize: 25, backgroundColor: 'white', color: '#c770f0', }} />
                            </Box>
                        </a>
                        <a href="https://github.com/Sushantshekharzz" target="_blank" rel="noopener noreferrer">
                            <Box sx={{
                                borderRadius: '50%', // Make it round (50% of width/height)
                                backgroundColor: 'white',
                                height: 45,
                                width: 45,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <GitHubIcon sx={{ fontSize: 25, backgroundColor: 'white', color: '#c770f0' }} />
                            </Box>
                        </a>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

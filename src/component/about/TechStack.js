import React from 'react'
import { Box, Typography } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";
import { FaPython } from "react-icons/fa";

import Grid from '@mui/material/Grid2';




export default function TechStack() {

    const techStack = [
        <FaReact />,
        <FaNode />,
        <SiExpress />,
        <SiPostgresql />,
        <FaJs />,
        <SiTypescript />,
        <FaGithub />,
        <SiGooglecloud />,
        <FaPython />

    ]
    return (
        <Box sx={{ textAlign: 'center', }}>

            <Typography sx={{ fontFamily: 'Raleway,serif', fontSize: 40, color: 'white' }} >Professional <Typography component="span" sx={{ fontFamily: 'Raleway,serif', color: '#c770f0', fontWeight: 1000, fontSize: 40, }}>Skillset</Typography></Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'center', paddingTop: 6 }}>

                {techStack.map((tech) => {
                    return (

                        <Grid size={{ xs: 6, md: 3 }} >
                            <Box sx={{
                                fontSize: 100, color: 'white', padding: 4, borderWidth: 2, borderStyle: 'solid', borderColor: '#c770f0', display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 2,
                                transition: 'all 0.3s ease-in-out', // Smooth transition

                                '&:hover': {
                                transform: 'scale(1.1)', // Slightly scale the icon on hover
                            }
                            }}>
                                {tech}
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>

        </Box>
    )
}

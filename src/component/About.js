import React from 'react'
import { Box } from '@mui/material'
import backgroundImage from "../image/backgroundImage.png"
import { Typography } from '@mui/material'
import about from "../image/about.png"

export default function About() {
  return (
    <Box sx={{
      backgroundImage: `url(${backgroundImage})`, minHeight: '100vh',
      backgroundSize: 'cover', // Ensure the image covers the entire container
      backgroundAttachment: 'fixed', // Desktop: Fixed background
      backgroundPosition: 'center', // Center the background image
      paddingInline: { xs: 5, md: 10 },
      wordBreak: { xs: 'break-word', md: 'break-word' }, // Forces long words to break 
      paddingBottom: 10
    }}>
      <Box sx={{
        paddingTop: { xs: 20, md: 22 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'space-around'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
          <Box>
          <Typography
            sx={{ fontFamily: 'Raleway,serif', fontSize: 40, color: 'white', }}
          >Know Who<Typography component="span" sx={{ fontFamily: 'Raleway,serif', color: "#c770f0", fontWeight: 1000, fontSize: 40, }}> I'M</Typography></Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%', width: '100%', padding:4 }}>
          <Box >
            <Typography
              sx={{ fontFamily: 'Roboto Condensed', fontSize: 25, color: 'white', }}
            >Hi Everyone, I am <Typography component="span" sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontWeight: 200, fontSize: 25, }}>Sushant Shekhar</Typography> from <Typography component="span" sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontWeight: 200, fontSize: 25, }}>Gaya, Bihar.</Typography></Typography>
          </Box>
          <Box sx={{paddingTop:2}}>
            <Typography
              sx={{ fontFamily: 'Roboto Condensed', fontSize: 25, color: 'white', }}
            >I previously worked at <Typography component="span" sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontWeight: 200, fontSize: 25, }}>Jman Group</Typography> and am currently seeking new opportunities.</Typography>
          </Box>
          <Box sx={{paddingTop:2}}>

            <Typography
              sx={{ fontFamily: 'Roboto Condensed', fontSize: 25, color: 'white', }}
            >I completed my <Typography component="span" sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontWeight: 200, fontSize: 25, }}>B.Tech</Typography> from <Typography component="span" sx={{ fontFamily: 'Roboto Condensed', color: "#c770f0", fontWeight: 200, fontSize: 25, }}>Asansol Engineering College.</Typography></Typography>
          </Box>
          </Box>
        </Box>

        <Box sx={{ height: '100%', width: '100%' , padding:{xs:5,md:0},                         
        maxWidth: { xs: '100%', md: '400px' }, // Full width on mobile, limited on desktop
}}>
          <img src={about} alt="" style={{ height: '100%', maxWidth: '100%', objectFit: 'cover' }} />
        </Box>

      </Box>
    </Box>
  )
}

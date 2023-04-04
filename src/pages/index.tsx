// pages/page.ts
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParallax } from '../hooks/useParallax';
import Resume from '../components/resume';

export default function Home() {
  const parallaxSpeed = 0.5;
  const offsetY = useParallax(parallaxSpeed);

  return (

      <Box
          sx={{
            minHeight: '100vh',
            backgroundImage: `url('/seattle-city-background.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', // Apply the blur effect
            transform: `translateY(${offsetY}px)`,
          }}
      >

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(5px)',
                fontFamily: 'Montserrat, sans-serif',
                minHeight: '100vh',
            }}
        >
          <Typography variant="h2" component="h1" textAlign="center">
            Hello, I'm Jessica Wise
          </Typography>
          <Typography variant="body1" component="p" textAlign="center">
           A senior software engineer with 8 years of experience.
          </Typography>
            <Resume />
        </Box>
      </Box>
  );
}

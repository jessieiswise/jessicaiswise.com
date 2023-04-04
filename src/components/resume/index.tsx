// components/Resume.tsx
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const Resume: React.FC = () => {
    return (
        <Box
            sx={{
                padding: 4,
                fontFamily: 'Roboto, sans-serif',
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                    Jessica Wise
                </Typography>
                <Typography variant="subtitle1">
                    (425) 426-9379 | jessieiswise@gmail.com
                </Typography>
                <Typography variant="subtitle1">Seattle, WA</Typography>
                <Typography variant="subtitle1">
                    linkedin.com/in/jessicaiswise | github.com/jessieiswise
                </Typography>
            </Box>

            {/* Rest of the resume sections */}
            {/* Example: */}
            <Box sx={{ marginTop: 4 }}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                    Professional Summary
                </Typography>
                <Typography variant="body1" paragraph>
                    Highly skilled Senior Software Engineer with 8 years of experience...
                </Typography>
            </Box>

            {/* Work Experience section */}
            <Box sx={{ marginTop: 4 }}>
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                    Work Experience
                </Typography>

                <Box sx={{ marginTop: 2 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Poggio Labs | Senior FullStack Developer | (12/2022 - Present)
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography variant="body1">
                                Spearheaded the implementation of a series of API endpoints using GraphQL for a new entity, improving data accessibility and enabling faster development of new features...
                            </Typography>
                        </ListItem>
                        {/* Add more bullet points */}
                    </List>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Getlabs | Senior FullStack Developer | (08/2021 - 12/2022)
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography variant="body1">
                                Developed a new library for a branding update in Angular, improving brand consistency and user experience...
                            </Typography>
                        </ListItem>
                        {/* Add more bullet points */}
                    </List>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Zonar Systems | SDE III | (01/2018 - 07/2021)
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography variant="body1">
                                Designed and developed modular UI components as a part of the design system, improving code maintainability and brand consistency...
                            </Typography>
                        </ListItem>
                        {/* Add more bullet points */}
                    </List>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Freelance | Contract Software Developer | (04/2016 - 01/2018)
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography variant="body1">
                                Successfully delivered multiple projects with tight deadlines and limited resources, demonstrating strong project management skills...
                            </Typography>
                        </ListItem>
                        {/* Add more bullet points */}
                    </List>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        MatterHackers | Web Applications Developer, Lvl. 2 | (04/2015 - 04/2016)
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography variant="body1">
                                Designed and implemented a proxy server using Flask to handle POS API requests, improving system security and stability...
                            </Typography>
                        </ListItem>
                        {/* Add more bullet points */}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Resume;

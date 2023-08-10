import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Box, IconButton, Typography } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#1c1c1c', color: '#daddd8', padding: '20px', textAlign: 'center' }}>
            <Box sx={{ marginBottom: '10px' }}>
                <IconButton href="https://www.linkedin.com/in/seth-schoenert-aa852b214/" target="_blank" rel="noopener noreferrer" color="inherit">
                    <LinkedInIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
                <IconButton href="https://github.com/sethschnrt" target="_blank" rel="noopener noreferrer" color="inherit">
                    <GitHubIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
                <IconButton href="https://twitter.com/schoboat" target="_blank" rel="noopener noreferrer" color="inherit">
                    <TwitterIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
                <IconButton href="mailto:seth.schoenert@gmail.com" target="_blank" rel="noopener noreferrer" color="inherit">
                    <EmailIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
            </Box>
            <Typography sx={{ fontFamily: "'pretendard', sans-serif", fontSize: '1rem' }} >© 2023 Seth Schoenert | All rights reserved.</Typography>
        </Box>
    );
}

export default Footer;
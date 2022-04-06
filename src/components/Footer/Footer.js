import React from 'react';
import {Box, Container, Link, Typography} from '@mui/material';

function Copyright() {
    return (
        <Typography variant="body2" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'black', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;

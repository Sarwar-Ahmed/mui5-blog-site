import React from 'react';
import {Box, Grid, Paper, Typography} from '@mui/material';

const HomeBanner = () => {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                height: '60vh',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url("https://anisul-blog-project.netlify.app/images/cover-photo.jpg")`,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item sm={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            MUI5 BLOG SITE
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default HomeBanner;

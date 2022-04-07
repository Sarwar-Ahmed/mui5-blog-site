import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Container, Grid, Link, Paper, Stack, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

const PostDescription = () => {

    const params = useParams();

    const [post, setPosts] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid
                item
                xs={12}
                md={8}
                // sx={{
                //     '& .markdown': {
                //         py: 3,
                //     },
                // }}
            >
                <Container>
                    <Typography variant="h6" gutterBottom>
                        Post No: { post.id }
                    </Typography>
                    <img
                        src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        className="responsive"
                    />
                    <Typography variant="h4" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography variant="p">
                        {post.body}
                    </Typography>
                </Container>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                    <Typography variant="h6" gutterBottom>
                        {sidebar.title}
                    </Typography>
                    <Typography>
                        {sidebar.description}
                    </Typography>
                </Paper>
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Archives
                </Typography>
                {sidebar.archives.map((archive) => (
                    <Link display="block" variant="body1" href={archive.url} key={archive.title}>
                        {archive.title}
                    </Link>
                ))}

                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Social
                </Typography>
                {sidebar.social.map((network) => (
                    <Link
                        display="block"
                        variant="body1"
                        href="#"
                        key={network.name}
                        sx={{ mb: 0.5 }}
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <network.icon />
                            <span>{network.name}</span>
                        </Stack>
                    </Link>
                ))}
            </Grid>
        </Grid>
    );
};

export default PostDescription;

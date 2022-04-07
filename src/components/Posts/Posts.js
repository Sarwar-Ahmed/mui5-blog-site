import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, CardMedia, Container, Typography, CardActions, Grid, Box, Pagination} from '@mui/material';
import './posts.css'

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <Container>
            <h1>Blog Posts</h1>
            <Box my={4}>
                <Pagination count={10} style={{ display: 'flex', justifyContent: 'center' }}/>
            </Box>
            <Grid container spacing={2}>

                    {
                        posts.map((post) => (
                            <Grid key={post.id} item xs={4}>
                                <Card className="customCard">
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
            </Grid>
            <Box my={4}>
                <Pagination count={10} style={{ display: 'flex', justifyContent: 'center' }}/>
            </Box>

        </Container>
    );
};

export default Posts;

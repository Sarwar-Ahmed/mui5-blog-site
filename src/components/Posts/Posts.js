import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, CardMedia, Container, Typography, CardActions, Grid} from '@mui/material';

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

            <Grid container wrap="nowrap">
                {
                    posts.map((post) => (
                        <Card key={post.id} sx={{ maxWidth: 345, marginRight: 0.5, my: 5 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                style={{ width: '30%'}}
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
                    ))
                }
            </Grid>


        </Container>
    );
};

export default Posts;

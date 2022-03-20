import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const PaintingCard = ({src, alt, name, author, id}) => {
    return (
        <Card sx={{  backgroundColor: '#ba68c8'}} className='Exhibition-Card'>
            <CardMedia
                component="img"
                height='500'
                image={src}
                alt={alt}
            />
            <CardContent sx={{height: '50px', mt: 1}}>
                <Typography variant="h6" component="div" color={'white'}>
                    {name} : {author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{fontSize:'15px', color: 'white',
                border: '3px solid white', marginTop: '50px'}} >
                    <NavLink className='Nav-Link' to={`/paintings/${id}`} >Learn More</NavLink>
                </Button>
            </CardActions>
        </Card>
    );
}

export default PaintingCard;
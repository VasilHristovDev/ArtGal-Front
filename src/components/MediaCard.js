import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({src, alt, name, author}) {
  return (
    <Card sx={{backgroundColor:'#ba68c8'}} className='Media-Card'>
      <CardMedia
        component="img"
        height='500'
        image={src}
        alt={alt}
      />
      <CardContent sx={{height: '70px', mt: 2}}>
        <Typography variant="h4" component="div" color={'white'}>
          {name} : {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" sx={{fontSize:'20px', color: 'white', border: '3px solid white'}} >Learn More</Button>
      </CardActions>
    </Card>
  );
}

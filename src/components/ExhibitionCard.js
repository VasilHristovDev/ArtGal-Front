import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ExhibitionCard = ({src, alt}) => {
    return (
        <Card sx={{ backgroundColor: '#ba68c8'}} className='Exhibition-Card'>
            <img src={src} alt={alt} className='Exhibition-Card-Image' />
            <CardContent sx={{height: '50px', mt: 1}}>
                <Typography variant="h6" component="div" color={'white'}>
                    Exhibition Name : Author Name
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{fontSize:'15px', color: 'white', border: '3px solid white'}} >Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default ExhibitionCard;


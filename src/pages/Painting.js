import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPainting } from '../api/PaintingApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';

const Painting = () => {
    const [painting, setPainting] = useState({});
    const [currentImage, setCurrentImage] = useState('');

    let params = useParams();

    useEffect(() => {
        getPainting(params.paintingId)
            .then((data) => {
                setPainting(data);
                setCurrentImage(data.gallery[0]);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }, []);

    return (
        <Carousel>
            <div style={{marginTop: '50px'}}>
                <Card sx={{backgroundColor:'#ba68c8'}} className='Painting-Detailed-Card'>
                    <CardMedia
                        component="img"
                        height='700'
                        image={painting.gallery}
                        alt={'painting'}
                    />
                    <CardContent sx={{height: '200px', mt: 2}}>
                        <Typography variant="h4" component="div" color={'white'}>
                            {painting.name} : {painting.author}
                        </Typography>
                        <Typography variant="h6" component="div" color={'white'}>
                            Genre : {painting.genre}
                        </Typography>
                        <Typography variant="h6" component="div" color={'white'}>
                            Size : {painting.width} x {painting.height} cm
                        </Typography>
                        <Typography variant="h6" component="div" color={'white'}>
                            Material : {painting.material}
                        </Typography>
                        <Typography variant="h6" component="div" color={'white'}>
                            {painting.exhibition && <>Exhibition :  {painting.exhibition} </> }
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Carousel>    
    );
}

export default Painting;
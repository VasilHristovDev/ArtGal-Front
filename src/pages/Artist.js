import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtist} from '../api/ArtistApi';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PaintingCard from "../components/PaintingCard";

const Artist = () => {
    const [artist, setArtist] = useState({});

    let params = useParams();

    useEffect(() => {
        getArtist(params.artistId)
            .then((data) => {
                setArtist(data);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }, []);


    return (
        <div style={{marginTop: '80px'}}>
                {(artist.paintings) &&
                    artist.paintings.map((painting, index) => {
                        console.log('p', painting);
                        return (
                            painting.name ? <Card id={painting.id} sx={{backgroundColor:'#ba68c8'}} className='Media-Card'>
                                <CardMedia
                                    component="img"
                                    height='500'
                                    image={painting.images[0].url}
                                    alt={'painting'}
                                />
                                <CardContent sx={{height: '70px', mt: 2}}>
                                    <Typography variant="h4" component="div" color={'white'}>
                                    {painting.name} : {artist.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large" sx={{fontSize:'20px', color: 'white', border: '3px solid white'}} >Learn More</Button>
                                </CardActions>
                                </Card>
                                 : <></>
                        ); 
                    })
                }
        </div>
    );
}

export default Artist;
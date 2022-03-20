import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPainting } from '../api/PaintingApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Artist = () => {
    // const [painting, setPainting] = useState({});
    // const [currentImage, setCurrentImage] = useState('');

    let params = useParams();

    return (
        <div style={{marginTop: '80px'}}>
            <h1>Artist {params.artistId}</h1>
        </div>
    );
}

export default Artist;
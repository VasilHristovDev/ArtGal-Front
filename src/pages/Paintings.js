import PaintingCard from '../components/PaintingCard';
import img1 from '../images/image1.jpg';
import img2 from '../images/images2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import { getPaintings, getSizeSettings } from '../api/PaintingApi';
import { useEffect, useState } from 'react';

const Paintings = () => {
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        getPaintings()
            .then((data) => {
                setPaintings(data);
            })
            .catch((error) => {
                console.log('Eroor', error);
            });
    }, []);
    
    return (
        <div className='Exhibitions-List'>
            {paintings.map((painting) => (
                <PaintingCard key={painting.id} src={painting.gallery} alt='painting' 
                    name={painting.name} author={painting.author} id={painting.id} /> 
            ))}
        </div>
    );
}

export default Paintings;
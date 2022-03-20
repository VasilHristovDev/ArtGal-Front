import PaintingCard from '../components/PaintingCard';
import { getPaintings } from '../api/PaintingApi';
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
            {paintings.length > 0 && paintings.map((painting) => (
                <PaintingCard key={painting.id} src={painting.gallery[0]} alt='painting' 
                    name={painting.name} author={painting.author} id={painting.id} /> 
            ))}
            {paintings.length == 0 && 
                <div>No Content</div>
            }
        </div>
    );
}

export default Paintings;
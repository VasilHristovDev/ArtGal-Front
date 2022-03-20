import ArtistCard from "../components/ArtistCard";
import { getArtists } from "../api/ArtistApi";
import { useEffect, useState } from 'react';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists()
            .then((data) => {
                setArtists(data);
            })
            .catch((error) => {
                console.log('Eroor', error);
            });
    }, []);

    return (
        <div className='Artists-List'>
            {artists.map((artist) =>{
                return (
                    <ArtistCard name={artist.name} country={artist.country} paintings={artist.paintings_count}
                        exhibitions={artist.exhibitions_count} id={artist.id} />
                );
            })}
        </div>
    );
}

export default Artists;
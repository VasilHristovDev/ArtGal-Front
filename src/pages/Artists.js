import ArtistCard from "../components/ArtistCard";
import { getArtists } from "../data";

const Artists = () => {
    let artists = getArtists();
    return (
        <div className='Artists-List'>
            {artists.map((artist) =>{
                return (
                    <ArtistCard name={artist.name} country={artist.country} paintings={artist.paintings}
                        exhibitions={artist.exhibitions}/>
                );
            })}
        </div>
    );
}

export default Artists;
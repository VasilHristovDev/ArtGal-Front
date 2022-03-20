import MediaCard from '../components/MediaCard';
import { useState } from 'react';

const Home = () => {
    const imageOfTheDay = JSON.parse(localStorage.getItem('painting_of_the_day'));
    // const [token, setToken] = useState('');
    // const sessionToken = sessionStorage.getItem('token')
    // if(sessionToken) {
    //     setToken(sessionToken);
    // }
    return (
        <main className='Main-Home'>
            {(imageOfTheDay && imageOfTheDay.gallery && imageOfTheDay.gallery.length > 0) &&
                <MediaCard src={imageOfTheDay.gallery[0]} alt='painting of the day' 
                    name={imageOfTheDay.name} author={imageOfTheDay.user.name}/>
            }
            {(!imageOfTheDay || !imageOfTheDay.gallery || imageOfTheDay.gallery.length === 0) &&
                <h1>No current image of the day</h1>
            }
        </main>
    );
}

export default Home;
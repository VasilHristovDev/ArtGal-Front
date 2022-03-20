import MediaCard from '../components/MediaCard';
import img from '../images/images2.jpg';
import { useState } from 'react';

const Home = () => {
    return (
        <main className='Main-Home'>
            <MediaCard src={img} alt='painting of the day'/>
        </main>
    );
}

export default Home;
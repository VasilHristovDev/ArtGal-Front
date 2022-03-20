import MediaCard from '../components/MediaCard';
import img from '../images/images2.jpg';
import { useState } from 'react';

const Home = () => {
    const imageOfTheDay = JSON.parse(localStorage.getItem('painting_of_the_day'));
    console.log('img', imageOfTheDay);
    return (
        <main className='Main-Home'>
            <MediaCard src={imageOfTheDay.gallery[0]} alt='painting of the day' 
                name={imageOfTheDay.name} author={imageOfTheDay.user.name}/>
        </main>
    );
}

export default Home;
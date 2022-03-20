import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className='Main'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Main;
import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Gifts from '../Gifts';
import Footer from '../Footer';

function Home(){
    return(
        <>
        <HeroSection />
        <Gifts />
        <Footer />
        </>
    )
}
export default Home;
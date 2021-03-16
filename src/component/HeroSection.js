import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css'
import video from './videos/video-1.mp4'

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>I LOVE YOU SO MUCH</h1>
            <h2> Do you love me?</h2>
            <div className="hero-btns">
                <Button className='btns' buttuonStyle='btn--outline'
                buttonSize='btn--large'
                
                >Yes.Me too <i class="fas fa-heart"></i>
                </Button>
                <Button className='btns' buttuonStyle='btn--primary'
                buttonSize='btn--large'
                ><Link to='/contact'>No. I don't <i class="far fa-frown"></i></Link>
                </Button>
            </div>

        </div>
    )
}

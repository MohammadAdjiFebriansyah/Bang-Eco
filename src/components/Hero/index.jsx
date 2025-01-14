import React from "react";
import './Hero.css';
import HeroImage from '../../assets/Hero/HeroImage.png';

const Hero = () => {
    return (
        <div className="hero">
            <img src={HeroImage} alt='HeroImage' />
            <div className="heroText">
                <h1>Mari menjaga lingkungan<br/>dengan mengolah sampah anda!</h1>
            </div>
        </div>
    )    
}

export default Hero;
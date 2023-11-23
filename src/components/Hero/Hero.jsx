import React, { useState, useEffect } from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import homemeditation from '../Assets/home-meditation.png';

const Hero = () => {
    const quotes = [
        "The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear.- Buddha" ,
        "Meditation brings wisdom; lack of meditation leaves ignorance. Know well what leads you forward and what holds you back, and choose the path that leads to wisdom.- Buddha" ,
        "The nature of yoga is to shine the light of awareness into the darkest corners of the body.- Jason Crandell" 
    ];

    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        // Select a random quote when the component mounts
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);
    }, []);

    return (
        <div className='hero'>
            <div className='hero-left'>
                <div className='quotes'>
                    <p>{randomQuote}</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest offers</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className='hero-right'>
                <img src={homemeditation} alt=''/>
            </div>
        </div>
    )
}

export default Hero;

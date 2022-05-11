import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h3>Become the best in the realm of  professionals <br /> and give back to the world</h3>
      <div className='hero-buttons'>
        <Button
          className='button-join'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Explore 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

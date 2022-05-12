import React from 'react';
import '../App.css';
import { Button } from './Button';
import {useSelector, useDispatch} from 'react-redux';
import './HeroSection.css';

function HeroSection() {
  const auth= useSelector((state) => state.auth)
  const dispatch=useDispatch()
  console.log(auth);

  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Our next classes start in June</h1>
      
      {auth.isAuthenticated ? null : <>
      <div className='hero-buttons'>
        <Button
          className='button-join'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Join Today
        </Button>
        {/* <Button
          className='button'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        
        >
          Subscribe To our Newsletter <i class="material-icons"></i>
        </Button> */}
      </div>
      </>}
    </div>
  );
}

export default HeroSection;

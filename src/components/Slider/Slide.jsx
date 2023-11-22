import React ,{ Component, useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './Slide.scss'




function Slide({children, autoplay, slidesToScroll,slidesToShow,settings}) {

  const sliderRef = useRef(null);

 
     
     
  return (
   <div className='carousel'>
   
        <Slider className='Slider' ref={sliderRef} {...settings}>
         
            {children}
              
          </Slider>

   </div>
        
    
  
  )};
          
      


Slide.propTypes ={
    children : PropTypes.node.isRequired,
    slidesToScroll: PropTypes.node.isRequired,
    slidesToShow : PropTypes.node.isRequired
}

export default Slide
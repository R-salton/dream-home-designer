import React ,{ Component, useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import './Slide.scss'




function Slide({children, autoplay, slidesToScroll,slidesToShow,settings}) {

  const sliderRef = useRef(null);

 
const Arrows = () => {
    return (
     

      <div className="slider__arrow">
      
        <p className="arrow-btn prev" onClick={() => sliderRef.current?.slickPrev()} ><i class="ri-arrow-left-line"></i></p>
        <p className="arrow-btn next" onClick={() => sliderRef.current?.slickNext()} ><i class="ri-arrow-right-line"></i></p>
      </div>
      
      
      
      );
    };

     

      
     
     
  return (
   <div className='carousel'>
   
        <Slider className='Slider' ref={sliderRef} {...settings}>
         
            {children}
              
          </Slider>
          
          {Arrows()}

   </div>
        
    
  
  )};
          
            
 
      


Slide.propTypes ={
    children : PropTypes.node.isRequired,
    slidesToScroll: PropTypes.node.isRequired,
    slidesToShow : PropTypes.node.isRequired
}

export default Slide
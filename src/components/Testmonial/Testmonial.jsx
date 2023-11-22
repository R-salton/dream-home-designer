import React from 'react'
import './Testmonial.scss';

import { Clients } from '../../data';
import Slide from '../Slider/Slide';
  

const Testmonial = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        arrows: true,
        autoplaySpeed: 2000,
        swipperToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:1,
              slidesToScroll:1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  
      
      };
 

  return (
    <section className='testmonial' id="testimonials">
        <div className='container'>
            <div className='slider__content-top'>
                <h6 className='subtitle'>Testmonials From our clients</h6>
                <h2>Trusted by more than <span className='highlight'>2,000 customers</span></h2>
            </div>

            <div className='slider__wrapper'>
            <Slide autoplay={true} slidesToScroll={1} slidesToShow={1} {...settings}>

            
            {
                Clients.map((client,index) =>{ 
                    

                    return(
                    <div className='slider__item'>
                        <p className='description'>{client.desc}</p>

                        <div className='customer__details'>
                            <div className='customer__img'>
                                <img src={client.image} alt='' />
                            </div>

                            <div>
                                <h5 className='customer__name'>{client.name}</h5>
                                <p className='description'>{client.position}</p>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </Slide>  
            </div>
            
        </div>
    </section>
  )
}

export default Testmonial
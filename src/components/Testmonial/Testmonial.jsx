import React from 'react'
import './Testmonial.scss';
import Slider from "react-slick";
import { Clients } from '../../data';
  

const Testmonial = (props) => {

     

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipperToSlide: true,
      
      };

  return (
    <section className='testmonial'>
        <div className='container'>
            <div className='slider__content-top'>
                <h6 className='subtitle'>Testmonials From our clients</h6>
                <h2>Trusted by more than <span className='highlight'>2,000 customers</span></h2>
            </div>

            <div className='slider__wrapper'>
            <Slider className='Slider' {...settings}>
            
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
        </Slider>  
            </div>
            
        </div>
    </section>
  )
}

export default Testmonial
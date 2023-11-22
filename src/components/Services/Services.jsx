import React from 'react'
import './Services.scss';
import { ServicesData } from '../../data';
 
const Services = () => {
  return (
    <section id='services' className='service'>
        <div className='container'>
            <div className='services__top-content'>
                <h6 className='subtitle'>Our Sevices</h6>
                <h2>Get Your Dream Home with</h2>
                <h2 className='highlight'>our best services</h2>
            </div>

            <div className='service__item-wrapper'>

            {
                ServicesData.map((service,index)=>{
                    return(
                <div className='services__item' key={service.index}>
                    <img src={service.image} className='services__image' alt='' />
                    <h3 className='services__title'>{service.title}</h3>
                    <p className='description'>{service.description}</p>
                </div>
                    )
                })
            }
                
            </div>
        </div>
    </section>
  )
}

export default Services;
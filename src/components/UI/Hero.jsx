import React from 'react'
import './Hero.scss';
 

function Hero() {
  return (
    <section id='home' className='hero__section'>
        <div className='container'>
            <div className='hero__wrapper'> 
                <div className='hero__content'>
                    <div className='Text'> 
                    <h2>We're Creating Perfect</h2>
                    <h2>Modern Home Designs</h2>
                    <h2 className='highlight'>Make Your Dream a reality with us</h2>
                    </div>
                    <p className='description'>Sint duis exercitation ea exercitation ullamco aliquip aliqua do. Aliqua laborum ipsum laborum nulla veniam.
                    </p>
                    <div className='hero__buttons'>
                        <button className='primary__button btns'>Get Started Now </button>
                        <a href='#contacts' style={{cursor: 'pointer'}}><button  className='secondary__button btns'>Contac Us</button></a>
                    </div>

                </div>

                
                <div className='hero__image'>
                    <img src='/images/beach-house.svg'  alt='hero-imag '/>
                </div>
            </div>
        </div>
    </section>
  )
}




export default Hero
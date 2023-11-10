import React from 'react'
import './About.scss';
import { ChooseData } from '../../data';

function About() {
  return (
    <section id="about" className='about'>
      <div className='container'> 
        <div className='about__wrapper'>
          <div className='about__content'>
          <h6 className='subtitle'>Why Choosing us</h6>
                <h2>Get Your Dream Home with</h2>
                <h2 className='highlight'>Our best services</h2>
                <p className='description about__content-desc'>
                  Deserunt et eu ea tempor elit duis labore aute sunt quis eu do ea qui.Commodo in ullamco dolore nulla ut.
                  Sint fugiat elit enim occaecat fugiat mollit culpa aliqua laborum ut eiusmod id ipsum.
                </p>
                <div className='choose__wrapper'>

                {
                  ChooseData.map((item,index)=>{

                    return(
                  <div className='choose__us-item'>
                      <span className='choose__us-icon'><i class={item.icon}></i></span>
                      
                      <h4 className='choose__us-title'>{item.title}</h4>
                      <p className='description'>{item.desc}</p>
                      
                </div>
                    )
                  })
                }
                </div>

          </div>

          <div className='about__img'>
            <img src='/images/house.jpeg' alt='' />
          </div>
        </div>
      </div>
    </section>  
  )
}

export default About
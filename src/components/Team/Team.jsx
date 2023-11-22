import React from 'react'
import './Team.scss'
import { TeamData } from '../../data';

const Team = () => { 
  return (
    <section id='team' className='team'>
        <div className='container'>
            <div className='teams__top-content'>
                <h6 className='subtitle'>Our Team</h6>
                <h2>Meet with Our team</h2>
                 
            </div>

            <div className='team__item-wrapper'>

            {
                TeamData.map((person,index)=>{
                    return(
                <div className='teams__item'key={person.index}>
                    <img src={person.profile} alt='' />
                    <h3 className='teams__title'>{person.name}</h3>
                    <p className='description'>{person.designation}</p>
                    <div className='socials' >
                    <i class="ri-linkedin-box-fill"></i>
                    <i class="ri-twitter-x-line"></i>
                    </div>
                </div>
                    )
                })
            }
                
            </div>
        </div>
    </section>
  )
}

export default Team;
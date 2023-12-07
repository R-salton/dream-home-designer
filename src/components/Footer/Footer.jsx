import React from 'react'
import './Footer.scss';
import { socialLinks } from '../../data';
 
const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <footer className='footer'>
        <div className='container'>
            <hr className='hr-line'></hr>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <h2>Dream Home Designer</h2>
                    <p className='description'>Make it reality with us</p>
                    <p className='small__text description'>Turning Dreams into Dwellings, Visions into Vibrance - Dream Home Design, Where Every Detail Matters</p>
                </div>
                <div className='footer__quick-links'>
                    <h3 className='quick__links-title'>Support</h3>
                    <ul className='quick__links'>
                        {
                            socialLinks[2].map((social,index)=>{

                                return(
                                    <li className='quick__link-item' key={index}>
                                        <a href={social.path}><i class={social.icon}></i> {social.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='footer__quick-links'>
                    <h3 className='quick__links-title'>Find Us</h3>
                    <ul className='quick__links'>
                        {
                            socialLinks[1].map((social,index)=>{

                                return(
                                    <li className='quick__link-item' key={index}>
                                        <a href={social.path}><i class={social.icon}></i> {social.name}</a>
                                    </li>
                                )
                            })
                        } 
                    </ul>
                </div>


                <div className='footer__quick-links'>
                    <h3 className='quick__links-title'>Our Social Media</h3>
                    <ul className='quick__links'>
                        {
                            socialLinks[0].map((social,index)=>{

                                return(
                                    <li className='quick__link-item' key={index}>
                                        <a href={social.path} target="_blank" rel="noopener noreferrer" ><i class={social.icon}></i> {social.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
                <div className='copy-right'>
                    <h5>Dream Home Designer alright reserved. &copy; {year}</h5>
                </div>
        </div>
    </footer>
  )
}

export default Footer
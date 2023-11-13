import React from 'react'
import { Link } from 'react-router-dom';
import { Houses } from '../../data';
import Slide from '../Slider/Slide';
import  './Projects.scss'
const Projects = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        autoplaySpeed: 2000,
        swipperToSlide: true,
        responsive: [

            {
                breakpoint:1440 ,
                settings: {
                  slidesToShow: 4,
                  slidesToScrol:4,
                  initialSlide: 2
                }
              },
            {
                breakpoint:1024 ,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll:4,
                  initialSlide: 2
                }
              },
          {
            breakpoint: 992,
            settings: {
              slidesToShow:3,
              slidesToScroll:3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  
      
      };


    


  return (
    <section className='project' id='projects'>
    <div className='container'>
    <h2>Recent Projects</h2>
    <div className='project__wrapper'>

        <Slide className="project__content" slidesToScroll={3} slidesToShow={3} autoplay={true} settings={settings}>
      {Houses.map((project) => (


          <div className="project-card">
          <div className='top__content'>

            <img src={project.cover} alt=' ' />
          </div>
            <div className='project__details'>
                <h4>{project.title}</h4>
                <p>{project.desc.substring(0,95)}...</p>
            
            <Link className='show__btn' key={project.id} to={`/${project.id}`}>
                <h4>Sow More</h4>
            </Link>
            </div>
          </div>
        
      ))}
        </Slide>
    </div>
    </div>
  </section>
  )
}

export default Projects
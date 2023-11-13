// ProjectDetail.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProjectDetails.scss'
import { Houses } from '../../data';
import Slider from '../Slider/Slide';
import Modal from 'react-modal';




const ProjectDetails = () => {
  const { id } = useParams();
  const project = Houses.find((p) => p.id === parseInt(id, 10));
  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  // Fetch project details based on the id from your data source

  return (
    <section  className="project" id='projects'>
     <div className='container__project'>
        <div className='project__wrapper'>
           
            <h1>{project.title}</h1>
            
                <p>{project.desc}</p>
            
            <div className='images__wrapper'>
            <img className='image' src={project.cover} alt=' '  onClick={openModal}/>
            <img className='image' src={project.floo_1} alt=' ' onClick={openModal} />
        
            <img className='image' src={project.floo_2} alt=' ' />
            <img className='image' src={project.both_floo} alt=' ' />

            </div>
            
           <Link to="/">
            <p className='close'>X</p>
           </Link>
        </div>
     </div>
    </section>
  );
};

export default ProjectDetails;

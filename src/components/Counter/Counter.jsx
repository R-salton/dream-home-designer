import React from 'react'
import './Counter.scss';
import { counterData } from '../../data';

const Counter = () => {
  return (
    <section className='counter' id='projects'>
        <div className='container'>
            <div className='counter__wrapper'>

            {
                counterData.map((item,index)=>{

                    return(
                        <div className='counter__item' key={item.index}>
                    <h3 className='counter__number counter__desc'>{item.number}+</h3>
                    <h4 className='counter__title counter__desc'>{item.text}</h4>
                </div>
                    )
                })
            }
                
            </div>
        </div>
    </section>
  )
}

export default Counter
import React from 'react'
import leftArrow from './images/left-arrow.jpg'
import rightArrow from './images/right-arrow.jpg'
import './Carousel.css'

const ButtonSlider = ({direction,moveSlide}) => {
    console.log(direction, moveSlide);
  return (
    <button 
            onClick={moveSlide}
            className={direction === "next" ? 'btn-slide next': "btn-slide prev"} 
            > <img src={direction=== "next" ? rightArrow : leftArrow}/>
    </button>

  )
}

export default ButtonSlider
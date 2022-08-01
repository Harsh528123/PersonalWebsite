import {React, useState} from 'react'
import './Carousel.css'
import dataSlider from './carouselData'
import ButtonSlider from './ButtonSlider'

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex+1)
        } else {
            setSlideIndex(1);
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex-1)
        } else {
            setSlideIndex(dataSlider.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index);
    }

  return (
    <div className="container-slider">
            {dataSlider.map((obj, index)=>{
                return (
                    <div
                        key={obj.id}
                        className={slideIndex=== index + 1 ? "slide active-anim": "slide"}
                    >
                            {/* put absolute positioning and etc... */}
                         
                            <p className='title'> {obj.title} </p>
                            <div className='content'>
                                <div className='content button'>
                                    <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>
                                </div>
                                <p className='description'> {obj.description}</p>
                                <ButtonSlider moveSlide={nextSlide} direction={"next"}/>
                            </div>

                    </div>
                )
            })}
            <div className="container-dots">
                {Array.from({length: 4}).map((item,index)=> (
                    <div 
                        className={slideIndex===index+1 ? "dot active" : "dot"}
                        onClick={()=> moveDot( index + 1 )}
                    ></div>
                    ))}
            </div>
    </div>
  )
}

export default Carousel
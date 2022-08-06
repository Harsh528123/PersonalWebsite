import { useState, React } from "react"
import ScrollAnimation from 'react-animate-on-scroll';
import '../animate.css'


const TimelineItem = ({data,id}) => {
  const [clicked, setclicked] = useState(false)
  id+=1;
  return (
    <div className="timeline-item">
    {/* first wrapper*/}
    { id % 2 === 0 ? 
        <ScrollAnimation animateIn="bounceInLeft" duration={3} delay={0} className="special" animateOnce={true}>
        <div className="timeline-item-content">
          {/* second wrapper*/}
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <div className="language">
            {data.languages.map( language => <button> {language}</button>)}
            </div>
            {!clicked?  <button onClick={()=> setclicked(!clicked)}> Click here for more information! </button> : 
            <p><button onClick={()=> setclicked(!clicked)}> x </button>{data.text}</p>}
        </div>
        </ScrollAnimation>
        :
        <ScrollAnimation animateIn="bounceInRight" duration={3} delay={0} className="timelineanimation" animateOnce={true}>
          <div className="timeline-item-content">
            {/* second wrapper*/}
              <span className="tag" style={{ background: data.category.color }}>
                  {data.category.tag}
              </span>
              <time>{data.date}</time>
              <div className="language">
              {data.languages.map( language => <button> {language}</button>)}
              </div>
              {!clicked?  <button onClick={()=> setclicked(!clicked)}> Click here for more information! </button> : 
              <p><button onClick={()=> setclicked(!clicked)}> x </button>{data.text}</p>}
          </div>
          </ScrollAnimation>
      }
      

    </div>
  )
}

export default TimelineItem
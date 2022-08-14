import {React } from "react"
import ScrollAnimation from 'react-animate-on-scroll';
import TimelineContent from "./TimelineContent";
import '../animate.css'


const TimelineItem = ({data,id}) => {
  const {innerWidth} = window;
 // console.log(innerWidth);
  id+=1;
  return (
    <div className="timeline-item">
    {/* first wrapper*/}
    { id % 2 === 0 ? 
      innerWidth<=650?
      <TimelineContent data={data} />
      :
        <ScrollAnimation animateIn="bounceInLeft" duration={2} delay={0} className="special" animateOnce={true}>
            <TimelineContent data={data} />
        </ScrollAnimation>
        :
      innerWidth<=650?
        <TimelineContent data={data} />
      :
        <ScrollAnimation animateIn="bounceInRight" duration={2} delay={0} className="timelineanimation" animateOnce={true}>
            <TimelineContent data={data} />
        </ScrollAnimation>
      }
      

    </div>
  )
}

export default TimelineItem
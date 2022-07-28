import React from 'react'

import data from "./TimelineData";
import TimelineItem from './TimelineItem';
import './Timeline.css'


const Timeline = () => {
      return(
        <div className='secondPage'>
            <h1 className='timeline-title'> Tech-Related Work Experience </h1>
                <div className="timeline-container">
                    {data.map((data, id) => (
                        <TimelineItem data={data} key={id}/>
                    ))}
                </div>
        </div>
      )
        }

export default Timeline
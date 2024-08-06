import React from 'react'

import data from "./TimelineData";
import TimelineItem from './TimelineItem';
import './Timeline.css'


const Timeline = () => {
      return(
        <div className='secondPage'>
            <h1 className='timeline-title' id="Experience"> Volunteer and Work Experience in Tech </h1>
                <div className="timeline-container">
                    {data.map((data, id) => (
                        <TimelineItem data={data} key={id} id={id}/>
                    ))}
                </div>
        </div>
      )
        }

export default Timeline
import {React,useState} from 'react'

const TimelineContent = ({data}) => {
const [clicked, setclicked] = useState(false)
  return (
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
  )
}

export default TimelineContent
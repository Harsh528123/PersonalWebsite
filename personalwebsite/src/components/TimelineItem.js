import { useState, React } from "react"


const TimelineItem = ({ data}) => {
  const [clicked, setclicked] = useState(false)
  return (
    <div className="timeline-item">
    {/* first wrapper*/}
      <div className="timeline-item-content">
        {/* second wrapper*/}
          <span className="tag" style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <time>{data.date}</time>
          {!clicked?  <button onClick={()=> setclicked(!clicked)}> Click here for more information! </button> : null}
          {clicked? <p><button onClick={()=> setclicked(!clicked)}> x </button>{data.text}</p> : null}
      </div>
    </div>
  )
}

export default TimelineItem
import React from 'react'

const TimelineItem = ({ data}) => {
  return (
    <div className="timeline-item">
    {/* first wrapper*/}
      <div className="timeline-item-content">
        {/* second wrapper*/}
          <span className="tag" style={{ background: data.category.color }}>
              {data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
              <a
                  href={data.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {data.link.text}
              </a>
          )}
          <span className="circle" />
      </div>
    </div>
  )
}

export default TimelineItem
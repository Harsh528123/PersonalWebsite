import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <section className='OverallSkills'> 
        <section className='SpecificSkills'>
             <h2> Skills Learned in University </h2>
             <button> Python </button>
             <button> C++ </button>
             <button> Linux </button>
             <button className="noshow"> No Show </button>
        </section>
        <section className='SpecificSkills'> 
            <h2> Skills Learned in Side Projects and Club Work</h2> 
            <div className='all8'>
                    <div className='setof4'>
                        <button> Python </button>
                        <button> C++ </button>
                        <button> HTML </button>
                        <button> CSS </button>
                    </div >
                    <div className='setof4'>
                    <button> Flask </button>
                    <button> React </button> 
                    <button id='lastbutton'> SQLite </button> 
                    <button className="noshow"></button>
                    </div>
            </div>
        </section>
        <section className='SpecificSkills'>
            <h2> Skills Learned at a Workplace</h2>
            <div className='all8'>
                <div className='setof4'>
                    <button> JavaScript </button>
                    <button> Node.js </button>
                    <button> React.js </button>
                    <button> Express.js </button>
                </div>
                <div className='setof4'>
                    <button> PostgreSQL </button>
                    <button className="noshow"></button>
                    <button className="noshow"></button>
                    <button className="noshow"></button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Skills
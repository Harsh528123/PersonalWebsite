import React from 'react'
import Profile from './Intro.jpg'
import {AiFillGithub,AiOutlineLinkedin,} from 'react-icons/ai'
import './Intro.css'
const smallIntro = () => {
  return (
    <section className='introduction'>

        <img src={Profile} alt="Profile" className='Profile'/>

        <article className='BriefWelcome'> 
          <h1> My name is Harsh. </h1>
          <h1>  Welcome to my Page!</h1>
        </article>
        <article className='AboutMe'>
          <h1> Brief Introduction </h1>
          <p> I am studying Software Engineering at the University of Alberta and am in the graduating class of 2025.
              I am interested in exploring the various niches of programming such as front-end, back-end, data science, full-stack 
              and many more! I am currently a NSERC Research Assistant at Athabasca University (but more on that down below!).
              My availability for my next co-op is 8 months starting from January 2023. 
          </p>

          <span> <a href="https://github.com/Harsh528123"> <AiFillGithub color='black' size={"40"}/> </a>
          <a href="https://www.linkedin.com/in/harshkothari24/"> <AiOutlineLinkedin color='black' size={"40"}/> </a>
          </span>
        </article>
    </section>
  )
}

export default smallIntro
import {React} from 'react'
import Profile from './Intro.jpg'
import {AiFillGithub,AiOutlineLinkedin,} from 'react-icons/ai'
import ReactTypingEffect, { ReactTypingEffectProps } from 'react-typing-effect'
import './Intro.css'

const SmallIntro = () => {
  return (
    <section className='introduction'>
        <img src={Profile} alt="Profile" className='Profile'/>
        <article className='AboutMe' id="AboutMeMobile">
          <h1> Brief Introduction </h1>
          <p> I am studying Software Engineering at the University of Alberta and am in the graduating class of 2025.
              I am interested in exploring back-end and full-stack opportunities! I am currently a NSERC Research Assistant at Athabasca University (but more on that down below!).
              My availability for my next co-op is 8 months starting from January 2023. 
          </p>
          <span> 
              <a className="SocialMedia"  href="https://github.com/Harsh528123"> <AiFillGithub className='SocialMedia' color='black' size={"40"}/> </a>
              <a className="SocialMedia" href="https://www.linkedin.com/in/harshkothari24/"> <AiOutlineLinkedin className="SocialMedia" color='black' size={"40"}/> </a>      
          </span>
        </article>
    </section>
  )
}

export default SmallIntro
import {React} from 'react'
import Profile from './images/Intro.jpg'
import {AiFillGithub,AiOutlineLinkedin} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'
import './Intro.css'

const SmallIntro = ({theme}) => {
  return (
    
          <section className='introduction'>
              <img src={Profile} alt="Profile" className='Profile'/>
              <article className='AboutMe' id="AboutMeMobile">
                <h1> Brief Introduction </h1>
                      <p> I am studying Software Engineering at the University of Alberta and am in the graduating class of May 2025.
                          I am currently seeking new graduate software engineering opportunities so feel free to reach out! I have over 20 months
                          of internship experience and have worked extensively with different programming languages in agile environments.
                      </p>
                  {theme==='light' ?
                          <span> 
                          <a className="SocialMedia"  href="https://github.com/Harsh528123"> <AiFillGithub className='SocialMedia' color='black' size={"40"}/> </a>
                          <a className="SocialMedia" href="mailto:hmkothar@ualberta.ca"><MdOutlineEmail className='SocialMedia' color='black' size={40} /> </a> 
                          <a className="SocialMedia" href="https://www.linkedin.com/in/harshkothari24/"> <AiOutlineLinkedin className="SocialMedia" color='black' size={"40"}/> </a>
                          </span>
                          : 
                          <span>
                          <a className="SocialMedia"  href="https://github.com/Harsh528123"> <AiFillGithub className='SocialMedia' color='white' size={"40"}/> </a>
                          <a className="SocialMedia" href="mailto:hmkothar@ualberta.ca"><MdOutlineEmail className='SocialMedia' color='white' size={40} /> </a> 
                          <a className="SocialMedia" href="https://www.linkedin.com/in/harshkothari24/"> <AiOutlineLinkedin className="SocialMedia" color='white' size={"40"}/> </a>
                          </span>
                  }
              </article>
          </section>

  )
}

export default SmallIntro
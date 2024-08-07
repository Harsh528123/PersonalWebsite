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
                          I am interested in exploring back-end and full-stack opportunities! Currently I am doing a co-op at NOV (formerly National Oilwell Varco)
                          I have previously done two co-ops - one as a SWE intern at Ontario Power Generation (OPG)
                          and one as a NSERC Research Assistant with Athabasca University.
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
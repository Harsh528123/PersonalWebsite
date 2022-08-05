import React from 'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'

const Footer = ({theme}) => {

  const today = new Date();
  return (
    <div className='Footer'>
        <h1 id="Contact"> Harsh Kothari </h1>
        <div className='main-container'>
            <section className='first'>
                <h2> Contact Me </h2>
              {theme==='light' ?
                  <>
                    <a className="footerMedia" href="mailto:hmkothar@ualberta.ca"><MdOutlineEmail className='SocialMedia' color='black' size={40} /> </a> 
                    <a className="footerMedia" href="https://www.linkedin.com/in/harshkothari24/"> <AiOutlineLinkedin className="SocialMedia" color='black' size={"40"}/> </a>
                  </>
                    :
                  <>
                    <a className="footerMedia" href="mailto:hmkothar@ualberta.ca"><MdOutlineEmail className='SocialMedia' color='white' size={40} /> </a> 
                    <a className="footerMedia" href="https://www.linkedin.com/in/harshkothari24/"> <AiOutlineLinkedin className="SocialMedia" color='white' size={"40"}/> </a> 
                  </> 
              }
            </section>
            <section className='second'>
                <h2> Navigation </h2>
                <a className='footerNavigation' href="#Home"> Home </a>
                <a className='footerNavigation' href="#Experience"> Experience </a>
                <a className='footerNavigation' href="#Contact"> Contact </a>
            </section>
        </div>
        <p> Copyright &copy; {today.getFullYear() } Harsh Kothari</p>
    </div>
  )
}

export default Footer
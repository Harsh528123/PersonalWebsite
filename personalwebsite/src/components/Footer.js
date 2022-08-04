import React from 'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {MdOutlineEmail} from 'react-icons/md'

const Footer = () => {

  const today = new Date();
  return (
    <div className='Footer'>
        <h1> Harsh Kothari </h1>
        <div className='main-container'>
            <section>
                <h2> Contact Me </h2>
                <a className="footerMedia" href="mailto:hmkothar@ualberta.ca"><MdOutlineEmail className='SocialMedia' color='black' size={40} /> </a> 
                <a className="footerMedia" href="https://www.linkedin.com/in/harshkothari24/"> <AiOutlineLinkedin className="SocialMedia" color='black' size={"40"}/> </a>
            </section>
            <section> Thank you for viewing my page and I look forward to hear from you! </section>
            <section>
                <h2> Navigation </h2>
                <a className='footerNavigation'> Home </a>
                <a className='footerNavigation'> About </a>
                <a className='footerNavigation'> Contact </a>
            </section>
        </div>
        <p> Copyright &copy; {today.getFullYear() } Harsh Kothari</p>
    </div>
  )
}

export default Footer
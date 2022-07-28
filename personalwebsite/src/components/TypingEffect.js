import React from 'react'
import ReactTypingEffect from "react-typing-effect";
import "./TypingEffect.css"

const TypingEffect = () => {
  return (
    <header className='TypingEffect'>
        <ReactTypingEffect
        text={["My name is Harsh Kothari", "Welcome to my Page!"]}
        cursor=" "
        eraseDelay={2000}
        eraseSpeed={200}
        typingDelay={1000}
        speed={200}
      />
    </header>
  )
}

export default TypingEffect
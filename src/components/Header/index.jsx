import React, { useState } from 'react'

import './styles.css'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='header'>
      <span className='headerLogo'><a href="/">YK</a></span>
        <div className={`headerItems ${isOpen && 'open'}`}>
            <a href="/about">About</a>
            <a href="/experience">Experience</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </div>
        <div className={`headerToggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'></div>
        </div>
    </div>
  )
}

export default Header
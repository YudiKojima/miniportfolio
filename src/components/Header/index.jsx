import React from 'react'
import './styles.css'

function Header() {
  return (
    <header className='header'>
        <div>
            <ul className='list'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>
    </header>
  )
}

export default Header
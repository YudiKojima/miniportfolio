import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import './styles.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links_div'>
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/healthplan">
                        <p>Health Plan</p>
                    </a>
                    <a href="/individual">
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Resources</h4>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Testimonials</p>
                    </a>
                    <a href="/resource">
                        <p>STV</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Parteners</h4>
                    <a href="/employer">
                        <p>Swing Tech</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/carrer">
                        <p>Carrer</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Coming soon on</h4>
                    <div className='socialmedia'>
                        <a href="https://github.com/YudiKojima"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/marcosyudikojima/"><FaLinkedin/></a>
                        <a href="https://www.instagram.com/yuudi.m/"><FaInstagram/></a>
                    </div>
                </div>
            </div>

        <hr />
        
        <div className='sb_footer-below'>
            <div className='sb_footer-copyright'>
                <p>
                    @{new Date().getFullYear()} YK. All right reserved.
                </p>
            </div>
            <div className='sb_footer-below-links'>
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
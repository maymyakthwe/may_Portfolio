import React from 'react'
import './intro.css'
// import { motion } from 'framer-motion'
import profileWholeBody from '../../images/profile-whole-body.png'
import profile from '../../images/profile.png'


// import { FaFacebookMessenger } from 'react-icons/fa'



const Intro = () => {
    return (
        <section id='intro-section'>
            <div className='intro-section'>
                <div className='intro-home'>
                    <div className='intro-img'>
                        <img src={profileWholeBody} alt="" />
                        <img src={profile} alt="" />
                    </div>
                    <div className='intro-texts'>
                        <div className='hi-there'>
                            Hi There, My Name is
                        </div>
                        <div className='intro-name'>
                            <span>May Myak Thwel</span>
                        </div>
                        <div className='intro-profession'>
                            I am a Burmese <span>Web Developer</span>.
                        </div>
                        <div className='intro-background'>
                            I Study Website Development Specialized in <span>MERN Stack</span>.
                        </div>
                        <div className='intro-buttons'>
                            <button><a href="#contact-me">Contact Me!</a></button>
                            <button><a href="/projects">See My Work</a></button>
                        </div>
                        {/* <div className='intro-icons'>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                            <a href="/">< FaFacebookMessenger className="icon" /></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro

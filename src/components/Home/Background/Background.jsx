import React from 'react'
import './Background.css'
import cv from '../../images/cv.pdf'

const Background = () => {
    return (
        <div className='background'>
            <div className='background-wrapper'>
                <h1>ABOUT <span>ME</span></h1>
                <div className='line'></div>
                <p>My journey into web development began after
                    I had to pivot from a four-year study in petroleum
                    engineering due to the political situation in my country.
                    I immediately immersed myself in self-learning programming,
                    starting with HTML, CSS, and JavaScript, and quickly
                    advancing to React.js, where I discovered my passion
                    for creating beautiful, user-centric digital experiences.</p>
                <p>In addition to front-end development, I expanded my skill
                    set to include Node.js for backend development,
                    valuing the flexibility and reusable code it offers.
                    While I have explored various frameworks such as Laravel,
                    my primary focus remains on the MERN stack. I am also proficient
                    in both relational (MySQL) and non-relational (MongoDB) databases.</p>
                <p>Currently, I am pursuing a diploma in Infocomm Technology, which I will complete in December, 2024.
                    I am eager to apply my diverse skill set and passion for web development
                    to an innovative team.</p>

                <button>
                    <a href={cv} download>Download Resume</a>
                </button>


            </div>
        </div>
    )
}

export default Background

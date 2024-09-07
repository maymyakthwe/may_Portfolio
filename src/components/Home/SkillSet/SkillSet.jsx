import React from 'react'
import './SkillSet.css'

const SkillSet = () => {
    return (
        <div className='skill-set'>
            <div className='skill-set-wrapper'>
                <h1>Languages & <span>Frameworks</span></h1>
                <div>My primary focus is on MERN stack development.</div>
                <div className='languages'>
                    <div className='front-end'>
                        <h2>Front End</h2>
                        <div className='each-language'>
                            <p>HTML </p>
                            <div className='outside-bar'><div className='inside-bar'>Expert</div></div>
                        </div>
                        <div className='each-language'>
                            <p>CSS </p>
                            <div className='outside-bar'><div className='inside-bar'>Expert</div></div>
                        </div>
                        <div className='each-language'>
                            <p>JavaScript </p>
                            <div className='outside-bar'><div className='inside-bar'>Expert</div></div>
                        </div>
                        <div className='each-language'>
                            <p>React JS </p>
                            <div className='outside-bar'><div className='inside-bar'>Skilled</div></div>
                        </div>
                        <div className='each-language'>
                            <p>Type Script </p>
                            <div className='outside-bar'><div className='inside-bar'>Competent</div></div>
                        </div>
                    </div>
                    <div className='back-end'>
                        <h2>Back End</h2>
                        <div className='each-language'>
                            <p>Node JS </p>
                            <div className='outside-bar'><div className='inside-bar'>Skilled</div></div>
                        </div>
                        <div className='each-language'>
                            <p>Express JS </p>
                            <div className='outside-bar'><div className='inside-bar'>Skilled</div></div>
                        </div>
                        <div className='each-language'>
                            <p>Php </p>
                            <div className='outside-bar'><div className='inside-bar'>Competent</div></div>
                        </div>
                        <div className='each-language'>
                            <p>Laravel </p>
                            <div className='outside-bar'><div className='inside-bar'>Novice</div></div>
                        </div>
                    </div>
                    <div className='DataBase'>
                        <h2>Data Base</h2>
                        <div className='each-language'>
                            <p>MySQL </p>
                            <div className='outside-bar'><div className='inside-bar'>Skilled</div></div>
                        </div>
                        <div className='each-language'>
                            <p>Mongo DB </p>
                            <div className='outside-bar'><div className='inside-bar'>Skilled</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillSet

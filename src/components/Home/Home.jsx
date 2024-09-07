import React from 'react'
import FrontPage from './FrontPage/FrontPage'
import Intro from './Intro/Intro'
import Background from './Background/Background'
import SkillSet from './SkillSet/SkillSet'
import ContactMe from './ContactMe/ContactMe'

const Home = () => {
    return (
        <>
            <FrontPage />
            <Intro />
            <Background />
            <SkillSet />
            <ContactMe />
        </>
    )
}

export default Home

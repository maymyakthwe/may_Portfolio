import React, { useEffect, useState } from 'react'
import './frontPage.css'
// import Intro from '../Intro/Intro';
import { motion, AnimatePresence } from 'framer-motion'

import profile from '../../images/profile.png'

import { FiPhone } from 'react-icons/fi'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { ImInfo } from 'react-icons/im'
import { RiEmojiStickerLine } from 'react-icons/ri'
import { BsMic } from 'react-icons/bs'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsEmojiLaughing } from 'react-icons/bs'
import { CgChevronDoubleDown } from 'react-icons/cg'





function FrontPage() {
    let [renderTextOne, setRenderTextOne] = useState(false)
    let [renderTextTwo, setRenderTextTwo] = useState(false)
    let [renderTextThree, setRenderTextThree] = useState(false)
    let [renderTextFour, setRenderTextFour] = useState(false)
    let [renderTextFive, setRenderTextFive] = useState(false)
    let [renderTextSix, setRenderTextSix] = useState(false)
    let [typing, settyping] = useState(false);
    let [textRendered, settextRendered] = useState(false);


    //text render 
    useEffect(() => {


        let delayedRender = (setfunction, delay) => {
            // console.log('typing...')
            setTimeout(() => {
                setfunction(true);
            }, delay);
        }

        delayedRender(settyping, 1000)
        delayedRender(setRenderTextOne, 2500);
        delayedRender(setRenderTextTwo, 3500);
        delayedRender(setRenderTextThree, 5500);
        delayedRender(setRenderTextFour, 6500);
        delayedRender(setRenderTextFive, 8000);
        delayedRender(setRenderTextSix, 9500);

        setTimeout(() => {
            // console.log('typing...end')
            settyping(false);//typing btn
            settextRendered(true);//scroll-btn
        }, 11500);


        // let intro = document.querySelector('#intro-section');
        // intro.style.display = "none"
        // window.addEventListener('scroll', function () {
        //     if (this.scrollY > 10) {
        //         intro.style.display = "block"
        //     } else {
        //         intro.style.display = "none"
        //     }
        // })
    }, [])

    return (
        <section id='front-page-section' >
            <div className='add-border'>
                <div className='front-page-nav'>
                    <div className='person'>
                        <img src={profile} alt="profile-pic" />
                        <div className='name'>May Myak Thwel</div>
                    </div>
                    <div className='icons'>
                        <div><FiPhone className='icon' /></div>
                        <div><HiOutlineVideoCamera className='icon' /></div>
                        <div><ImInfo className='icon' /></div>
                    </div>
                </div>
            </div>
            <div className='text-section'>
                <div className='texts'>
                    <ul>
                        {renderTextOne && <li className="text">Hi</li>}
                        {renderTextTwo && <li className="text">Are you a recruiter?</li>}
                        {renderTextThree && <li className="text">Are you here to look for inspiration?</li>}
                        {renderTextFour && <li className="text">Either Way</li>}
                        {renderTextFive && <li className="text">You are in the right place <BsEmojiLaughing className='icon' /></li>}
                        {renderTextSix && <li className="text">Lets get started!</li>}
                    </ul>
                    <AnimatePresence>
                        {typing && <motion.div
                            animate={{ scale: 1, x: 60 }}
                            initial={{ scale: 0, x: 60 }}
                            exit={{ scale: 0, x: 60 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="typing">
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                        </motion.div>}
                    </AnimatePresence>
                    <img src={profile} alt="profile-pic" />
                </div>
                <div className='text-bar'>
                    <div className='text-bar-div'>
                        <div><RiEmojiStickerLine className='icon' /></div>
                        <div className='input'><input type="text" /></div>
                        <div><BsMic className='icon' /></div>
                        <div><HiOutlinePhotograph className='icon' /></div>
                        <div><AiOutlineHeart className='icon' /></div>
                    </div>
                </div >
                {
                    textRendered && <div >
                        <motion.div
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className='scroll-down'><CgChevronDoubleDown className='icon' /></motion.div>
                    </div>
                }
            </div>
            {/* <Intro /> */}
        </section >
    )
}

export default FrontPage

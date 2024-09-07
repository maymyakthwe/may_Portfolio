/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './WorkMenu.css'
import profile from '../../images/profile.png'
import allProjects from '../Projects'
import Project from './Project/Project'


const WorkMenu = () => {

    const [sideMenu, setSideMenu] = useState("all");
    const [projects, setProjects] = useState(allProjects);

    const filterProject = () => {
        let highlight = allProjects.filter((project) => project.catagory === "highlight")
        let personal = allProjects.filter((project) => project.catagory === "personal")
        let youtube = allProjects.filter((project) => project.catagory === "youtube")
        let game = allProjects.filter((project) => project.catagory === "game")

        //filter projects by category
        if (sideMenu === "highlight") {
            setProjects(highlight)
        } else if (sideMenu === "personal") {
            setProjects(personal)
        } else if (sideMenu === "youtube") {
            setProjects(youtube)
        } else if (sideMenu === "game") {
            setProjects(game)
        } else {
            setProjects(allProjects)
        }
        console.log("called")
        return projects;
    }

    useEffect(() => {
        filterProject();
    }, [sideMenu])

    return (
        <div className='work-menu'>
            <div className="sidebar">
                <a href='/' className="sidebar-img">
                    <img src={profile} alt="" />
                    <div className='sidebar-text'>
                        <div >May Myak Thwel</div>
                        <div >thirimyat68@gmail.com</div>
                    </div>
                </a>

                <div className='sidebar-link'>
                    <div onClick={() => setSideMenu('all')} className={sideMenu === "all" ? "active sideMenu" : "sideMenu"}> <span><i class="fa-solid fa-folder"></i></span>All Projects</div>
                    <div onClick={() => setSideMenu('highlight')} className={sideMenu === "highlight" ? "active sideMenu" : "sideMenu"}> <span><i class="fa-solid fa-star"></i></span>Highlight Projects</div>
                    <div onClick={() => setSideMenu('personal')} className={sideMenu === "personal" ? "active sideMenu" : "sideMenu"}><span><i class="fa-solid fa-key"></i></span>Personal Projects</div>
                    <div onClick={() => setSideMenu('youtube')} className={sideMenu === "youtube" ? "active sideMenu" : "sideMenu"}> <span><i class="fa-brands fa-youtube"></i></span>Youtube Trials</div>
                    <div onClick={() => setSideMenu('game')} className={sideMenu === "game" ? "active sideMenu" : "sideMenu"}> <span><i class="fa-solid fa-gamepad"></i></span>Game Projects</div>
                </div>
            </div>
            <div className='work-menu-body'>
                <h1>My <span>Projects</span></h1>
                <div className='projects'>
                    {projects.map((project, i) => {
                        return <Project key={i} project={project} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkMenu

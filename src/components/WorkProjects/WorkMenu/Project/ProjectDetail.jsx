import React from 'react'
import './ProjectDetails.css'
import { useParams } from 'react-router-dom';
import allProjects from '../../Projects'
import Carousel from '../Carousel/Carousel';
import ContactMe from '../../../Home/ContactMe/ContactMe';


const ProjectDetail = () => {
    const { id } = useParams('id');

    const project = allProjects.filter((p) => p.id === parseInt(id))

    return (<div className='project-details-wrapper'>
        <div className='project-details'>
            <a className='back-to-projects' href='/projects'>Back to project list</a>
            <h1>{project[0].name}</h1>
            <Carousel project={project[0]} linkDisable={true} />
            <div >
                <h2>Description</h2>
                <p>{project[0].description}</p>
                <h2>Key Informations</h2>
                <p>Complete date : {project[0].date}</p>

                {project[0].isDeployed ?
                    <div className="details-demo-link">
                        <p className='features'><span>{project[0].stack}</span></p>
                        <p className='features'><span>{project[0].framework}</span></p>
                        <p className='features'><span>Deployed</span></p>
                        <p><a href={project[0].demoLink} target='_blank' rel="noreferrer">Demo Link</a></p>
                    </div>
                    :
                    <div className="details-demo-link no-demo">
                        <p className='features'><span>{project[0].stack}</span></p>
                        <p className='features'><span>{project[0].framework}</span></p>
                        <p className='features'><span> Not Deployed </span></p>
                        <p><span><a href={project[0].demoLink} onclick="return false">Demo Link</a></span></p>
                    </div>
                }


                {/* <div className={project[0].isDeployed ? "details-demo-link" : "details-demo-link no-demo"}>
                                    <p className='features'><span>{project[0].stack}</span></p>
                                    <p className='features'><span>{project[0].framework}</span></p>
                                    <p className='features'><span> {project[0].isDeployed ? "Deployed" : "Not Deployed"} </span></p>
                                    <p><a href={project[0].demoLink} target='_blank' rel="noreferrer">Demo Link</a></p>
                                </div> */}
            </div>
        </div>
        <ContactMe />
    </div >
    )
}

export default ProjectDetail

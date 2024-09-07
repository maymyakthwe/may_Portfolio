import React from 'react'
import Carousel from '../Carousel/Carousel'

const Project = (props) => {

    return (
        <div className='project'>
            <h3>{props.project.name} <span> {props.project.date} </span></h3>
            <Carousel project={props.project} linkDisable={false} />
            <div className='project-text'>
                <div className='highlight-text'>{props.project.stack}</div>
                <p>{props.project.description}</p>
                <p className='features'>Framework : <span>{props.project.framework}</span></p>
                {
                    props.project.isDeployed ?
                        <div className="demo-link" >
                            <p className='features'>Deployed : <span>Yes</span></p>
                            <p><span><a href={props.project.demoLink} target='_blank' rel="noreferrer">Demo Link</a></span></p>
                        </div>
                        :
                        <div className="demo-link no-demo">
                            <p className='features'>Deployed : <span>No</span></p>
                            <p><span><a href={props.project.demoLink} onclick="return false">Demo Link</a></span></p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Project

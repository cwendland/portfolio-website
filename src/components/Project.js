import React from 'react';
import img from '../assets/images/plain-gray-background.jpeg';

const Project = ({project}) => {
    return(
        <article className='style1'>
            <span className="image">
                <img src={img}></img>
            </span>
            <a href={project.git}>
                <h2>{project.name}</h2>
                <div className="content">
                    <p>{project.desc}</p>
                </div>
            </a>
        </article>
    )
}

export default Project;
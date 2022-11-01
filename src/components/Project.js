import React from 'react';

const Project = (project) => {
    return(
        <article className="">
            <span className="image">
                <img src={project.img_src} alt={project.img_alt} />
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
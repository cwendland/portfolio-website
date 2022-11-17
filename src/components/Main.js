import React from 'react';
import Project from './Project';
import projectData from '../assets/projects.json';

const Main = () => {
    return(
        <div id="main">
            <div className="inner">
                <header>
                    <h1>What you need to know about me.</h1>
                    <p>Motivated software engineer with experience from internships and multiple academic projects seeking FTE opportunities. Scrappy and resourceful with a deep passion for technology. Effective communicator with experience teaching engineering concepts to young students.
                    </p>
                    <p className='nobot'><strong>University of California, Los Angeles</strong></p>
                    <p><strong>Los Angeles, CA</strong></p>
                    <p>Bachelors of Science in Molecular, Cellular, and Developmental Biology · <i>Complete 2022</i></p>
                    <p>Full-Stack Web Development · <i>Complete 2022</i></p>
                </header>
                <h2>Recent Works</h2>
                <section className="tiles">
                    {projectData.map((project) => <Project key={project.name} project={project}/>)}
                </section>
            </div>
            </div>
    )
};

export default Main;
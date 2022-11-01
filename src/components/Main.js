import React from 'react';
import Project from './Project';

const Main = () => {
    return(
        <div id="main">
            <div className="inner">
                <header>
                    <h1>What you need to know about me.</h1>
                    <p>Motivated software engineer with experience from internships and multiple academic projects seeking internship or FTE opportunities. Scrappy and resourceful with a deep passion for technology. Effective communicator with experience teaching engineering concepts to young students.
                    </p>
                    <p><strong>Loyola Marymount University <br></br> Los Angeles, CA</strong></p>
                    <p>Bachelors of Science, Computer Science · <i>Cum Laude · May 2022</i><br></br></p>
                    <p>Masters of Science, Computer Science · <i>exp. May 2023</i></p>
                </header>
                <h2>Recent Works</h2>
                {projects.map((project) => <Project project={project}/>)}
            </div>
            </div>
    )
};

export default Main;
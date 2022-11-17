import React from 'react';

const Navigation = ({handleClick}) => {

    return (
        <nav id="menu">
            <div className="inner">
                {/*conditionally render the component off of is visible, else just a button*/}
                <h1>Links</h1>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href="https://github.com/cwendland">Full Portfolio</a></li>
                    <li><a href="https://www.linkedin.com/in/cwendland/">LinkedIn</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>
                <h3>Contact Me</h3>
                    <p><strong>Email</strong><p>chriswendland@gmail.com</p></p>
                    <p><strong>Phone</strong><p>949·910·4342</p></p>
                </div>
                <a class="close" onClick={handleClick} name="close" href="#menu">Close</a>
        </nav>
    );
};

export default Navigation;
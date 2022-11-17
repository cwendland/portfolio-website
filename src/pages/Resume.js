import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import {useState} from 'react';
import resume from '../assets/Chris-Resume.pdf';

function Resume() {

    const [isMenuVisible, setMenuVisible] = useState(false);

    //On click of menu, toggle the body class to have is-menu-visible or not
    const handleClick = (event) => {
      const {name} = event.target;
  
      if(name === 'menu' || name === 'close') {setMenuVisible(!isMenuVisible)};
    }

    return(
        <div className={isMenuVisible ? "is-menu-visible" : "no-menu"}>
            <div id="wrapper">
                <header id="header">
                    <div className="inner">
                        <nav>
                            <ul>
                                <li><a href="#menu" name="menu" onClick={handleClick}>Menu</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div id="resume-container">
                    <iframe title="resume" src={resume} width="100%" height="500px">
                    </iframe>
                </div>
            </div>
            <Navigation handleClick={handleClick}/>
        </div>
    )
}

export default Resume;
import React from 'react';
import img from '../assets/images/profile-pic.jpg';

const Header = ({handleClick}) => {

    return (
        <header id="header">
            <div className="inner">
                    <a href="https://github.com/cwendland" className="logo">
                        <span className="symbol"><img src={img} alt="" /></span><span className="title">Chris Wendland</span>
                    </a>
                    <nav>
                        <ul>
                            {/*conditional rendering of menu with different class tags*/}
                            <li><a href="#menu" name="menu" onClick={handleClick}>Menu</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
  );
};

export default Header;
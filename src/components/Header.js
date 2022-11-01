import React from 'react';

const Header = () => {
  return (
        <header id="header">
            <div className="inner">
                    <a href="https://github.com/cwendland" className="logo">
                        <span className="symbol"><img src="images/avi.jpg" alt="" /></span><span className="title">Chris Wendland</span>
                    </a>
                    <nav>
                        <ul>
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>
            </div>
        </header>
  );
};

export default Header;
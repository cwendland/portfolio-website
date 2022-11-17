import './App.css';
import './assets/css/noscript.css';
import './assets/css/fontawesome-all.min.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {

  const [isMenuVisible, setMenuVisible] = useState(false);

  //On click of menu, toggle the body class to have is-menu-visible or not
  const handleClick = (event) => {
    const {name} = event.target;

    if(name === 'menu' || name === 'close') {setMenuVisible(!isMenuVisible)};
  }

  return (
    <div className={isMenuVisible ? "is-menu-visible" : "no-menu"}>
      <div id="wrapper">
        <Header handleClick={handleClick}/>
        <Main />
        <Footer />
      </div>
      <Navigation handleClick={handleClick}/>
    </div>
  );
}

export default App;

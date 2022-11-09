import './App.css';
import './assets/css/noscript.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div id="wrapper">
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

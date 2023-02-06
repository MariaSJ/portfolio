import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//import callToApi from '../services/api';
//import ls from '../services/localStorage';

// layout
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Proyects from './Proyects';
import Contact from './Contact';


function App() {

// STATES
  
const [showMenu, setShowMenu] = useState(false);
const [showName, setShowName] = useState(true);

const [activeNav, setActiveNav] = useState("/Home");


// HANDLER FUNCTIONS 

const handlerShowMenu = () => {
  setShowMenu(!showMenu);
  setShowName(!showName);
};

  return (
    <>
      <Header
        handlerShowMenu={handlerShowMenu}
        showMenu={showMenu}
        showName={showName}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Proyects" element={<Proyects />} />
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      </main> 
    </>
  );
}

export default App;

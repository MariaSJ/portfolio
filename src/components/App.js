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

  const [activeAboutMe, setActiveAboutMe] = useState(false);
  // const [activeProyects, setActiveProyects] = useState(false);
  // const [activeContact, setActiveContact ] = useState(false);

// USEEFFECT

// useEffect(() => {
//   // Dentro de useEffect llamamos a la API
//   callToApi().then((data) => {
//     // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente X
//     X(data);
//   });
//   // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
// }, []);

// HANDLER FUNCTIONS 

const handlerShowMenu = () => {
  setShowMenu(!showMenu);
  setShowName(!showName);
};

const handlerActiveAboutMe = () => {
  setActiveAboutMe(!activeAboutMe);
};

  return (
    <>
      <Header
        handlerShowMenu={handlerShowMenu}
        showMenu={showMenu}
        showName={showName}
        handlerActiveAboutMe={handlerActiveAboutMe}
        activeAboutMe={activeAboutMe}
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

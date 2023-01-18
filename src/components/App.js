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

function App() {

// STATES
  const [showMenu, setShowMenu] = useState(false);
  const [showName, setShowName] = useState(true);

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

  return (
    <>
      <Header handlerShowMenu={handlerShowMenu} showMenu={showMenu} showName={showName} />
      <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Proyects" element={<Proyects />}/>
      </Routes>
      </main> 
    </>
  );
}

export default App;

import '../styles/App.scss';
import {useState} from 'react';
//import callToApi from '../services/api';
//import ls from '../services/localStorage';
import PropTypes from 'prop-types';

// layout
import Header from './Header';

function App() {

// STATES
const [ showMenu, setShowMenu ] = useState(false);

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
};

  return (
    <>
      <Header handlerShowMenu={handlerShowMenu} showMenu={showMenu} />
    </>
  );
}

export default App;

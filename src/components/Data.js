import { NavLink } from 'react-router-dom';
//import jeje from '../../public/'
const Data = (props) => {

    return (
        <div className="home__data">
            <h1 className="home__title">María Somoza</h1>
            <h3 className="home__subtitle">Front-End Developer</h3>
            <a href="./CVMariaSJ.pdf" download target="_blank" className="home__button button--flex">Descargar CV</a>
            <NavLink href="#contact" className="home__button button--flex" to="/Contact">¿Charlamos?</NavLink>
        </div>
    );
}

export default Data;
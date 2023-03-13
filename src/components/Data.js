import { NavLink } from 'react-router-dom';
import cvPdf from '../assets/CVMariaSomoza.pdf';

const Data = (props) => {

    return (
        <div className="home__data fade-in-left">
            <h1 className="home__title">María Somoza</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <a href={cvPdf} download="CVMariaSomoza" target="_blank" rel="noopener noreferrer" className="home__button button--flex">Descargar CV</a>
            <NavLink href="#contact" className="home__button button--flex" to="/Contact">¿Charlamos?</NavLink>
        </div>
    );
}

export default Data;
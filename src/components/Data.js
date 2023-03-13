import { NavLink } from 'react-router-dom';
const Data = (props) => {

    return (
        <div className="home__data fade-in-left">
            <h1 className="home__title">María Somoza</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <a href="../.././CVMariaSomoza.pdf" download target="_blank" className="home__button button--flex">Descargar CV</a>
            <NavLink href="#contact" className="home__button button--flex" to="/Contact">¿Charlamos?</NavLink>
        </div>
    );
}

export default Data;
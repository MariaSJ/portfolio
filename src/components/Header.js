import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const handlerChangeShowMenu = (ev) => {
        ev.preventDefault();
        props.handlerShowMenu();
    };


    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <NavLink href="index.html" className={props.showName ? "nav__name" : "hidden"}>María SJ</NavLink>

                    <div className={props.showMenu ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <NavLink className={props.activeNav === "/Home" ? "nav__link active-link" : "nav__link"} to="/" onClick={() => props.setActiveNav("/Home")}>
                                    <i className="uil uil-estate nav__icon"></i>Home
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className={props.activeNav === "/AboutMe" ? "nav__link active-link" : "nav__link"} to="/AboutMe" onClick={() => props.setActiveNav("/AboutMe")}>
                                    <i className="uil uil-user nav__icon"></i>Sobre mí
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className={props.activeNav === "/Proyects" ? "nav__link active-link" : "nav__link"} to="/Proyects" onClick={() => props.setActiveNav("/Proyects")}>
                                    <i className="uil uil-folder nav__icon"></i>Proyectos
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className={props.activeNav === "/Contact" ? "nav__link active-link" : "nav__link"} to="/Contact" onClick={() => props.setActiveNav("/Contact")}>
                                    <i className="uil uil-at nav__icon"></i>Contacto
                                </NavLink>
                            </li>
                        </ul>

                        <i className="uil uil-times nav__close" onClick={handlerChangeShowMenu}></i>
                    </div>
                    <div className={props.showName ? "nav__toggle" : "hidden"} onClick={handlerChangeShowMenu}>
                        <i class="uil uil-apps"></i>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
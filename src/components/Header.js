const Header = (props) => {

    const handlerChangeShowMenu = (ev) => {
        ev.preventDefault();
        props.handlerShowMenu();
    };

    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__name">María SJ</a>

                    <div className={props.showMenu ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a className="nav__link active-link" href="#">
                                    <i className="uil uil-estate nav__icon"></i>Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    <i className="uil uil-user nav__icon"></i>Sobre mí
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    <i className="uil uil-folder nav__icon"></i>Proyectos
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    <i className="uil uil-at nav__icon"></i>Contacto
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav__close" onClick={handlerChangeShowMenu}></i>
                    </div>
                    <div className="nav__toggle" onClick={handlerChangeShowMenu}>
                        <i class="uil uil-bars"></i>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
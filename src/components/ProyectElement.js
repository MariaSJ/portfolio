import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/layout/proyectElement.scss';

const ProyectElement = (props) => {

    return (
        <article className="proyects__element">
            <h4 className="proyects__name">{props.title}</h4>
            {props.techIcon}
            <img
                className="proyects__img"
                src={props.img}
                alt={props.title}
                title={props.title}
            ></img>
            <div className="proyects__links">
                <a className="proyects__icon"
                    href={props.codeLink}
                    target="_blank"
                    rel="noreferrer">
                <i class="uil uil-brackets-curly"></i>
                </a>
                
                <a className="proyects__icon"
                    href={props.webLink}
                    target="_blank"
                    rel="noreferrer">
                <i class="uil uil-window"></i>
                </a>
            </div>
    </article>
    );
}

export default ProyectElement;
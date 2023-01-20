import imgContact from "../images/contact.png"

const Contact = () => {

    return (
      <section className="contact">
        <div className="contact__card">
  
            <div className="contact__title">
              <i className="uil uil-chat contact__icon"></i>
              <h1 className="contact__subtitle">¿Charlamos?</h1>
            </div>
          
            <div className="contact__elements">
            <img className="contact__img" src={imgContact} alt="Contacto" title="Contáctame"></img>
            <div className="contact__media">
              <a className="contact__link" href={`mailto: maria.som.jur@gmail.com`} target="_blank" rel="noreferrer">
                <i className="uil uil-envelope"></i>
                <p className="contact__text">Correo</p>
              </a>
              <a className="contact__link" href="https://www.linkedin.com/in/maria-somoza-jurado/" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin"></i>
                <p className="contact__text">Linkedin</p>
              </a>
              <a className="contact__link" href="https://github.com/MariaSJ" target="_blank" rel="noreferrer">
                <i className="uil uil-github"></i>
                <p className="contact__text">GitHub</p>
              </a>
            </div>
        </div>
        </div>
      </section>
    );
}

export default Contact;
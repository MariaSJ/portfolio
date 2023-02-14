import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/layout/contact.scss';

const Contact = () => {

  return (
    <section className="contact">
      <div className="card fade-in-fwd">
        <i className="icon uil uil-chat"></i>
        <p>¿Charlamos?</p>
        <span>
          <a className="contact__media" href="mailto:maria.som.jur@gmail.com" target="_blank" rel="noreferrer">
            <i className="uil uil-envelope"></i>
            Email
          </a>
          <a className="contact__media" href="https://www.linkedin.com/in/maria-somoza-jurado/" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin"></i>
            Linkedin
          </a>
          <a className="contact__media" href="https://github.com/MariaSJ" target="_blank" rel="noreferrer">
            <i className="uil uil-github"></i>
            GitHub
          </a>
        </span>
      </div>
    </section>
  );
}

export default Contact;
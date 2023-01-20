const Contact = (props) => {

  return (
    <section className="contact">
      <div className="contact__card">

        {/* cara 1 */}
          <div className="contact__face--one">
            <i class="uil uil-chat"></i>
            <p>¿Charlamos?</p>
          </div>
          
        {/* cara 2 */}
          <div className="contact__face--two">
            <div className="contact__media">
              <i class="uil uil-envelope"></i>
              <p className="contact__title">Correo</p>
            </div>
            <div className="contact__media">
              <i class="uil uil-linkedin"></i>
              <p className="contact__title">Linkedin</p>
            </div>
            <div className="contact__media">
              <i class="uil uil-github"></i>
              <p className="contact__title">GitHub</p>
            </div>
          </div>

      </div>
    </section>
    );
}

export default Contact;
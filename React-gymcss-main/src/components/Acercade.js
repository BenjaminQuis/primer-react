import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
            <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Hola, somos Gym Fitness Collpani</h2>
            <p data-aos="fade-up" data-aos-delay="400">En Gym Fitness Collpani, nos dedicamos a brindarte la mejor experiencia en fitness. Nuestra prioridad es tu bienestar y progreso personal. ¡Únete a nosotros hoy mismo!</p>
            <p data-aos="fade-up" data-aos-delay="500">Para cualquier consulta sobre nuestros servicios en Gym Fitness Collpani, no dudes en contactarnos. Estamos aquí para ayudarte en tu camino hacia una vida más saludable. ¡Gracias por elegirnos!</p>
            </div>
          <div className="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
            <div className="team-thumb">
              <img src="./images/team/team-image.jpg" className="img-fluid" alt="Trainer" />
              <div className="team-info d-flex flex-column">
                <h3>Mary Quispe</h3>
                <span>Instructora de Yoga</span>
                <ul className="social-icon mt-3">
                  <li><a href="#" className="fa fa-twitter"></a></li>
                  <li><a href="#" className="fa fa-instagram"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="800">
            <div className="team-thumb">
              <img src="./images/team/team-image01.jpg" className="img-fluid" alt="Trainer" />
              <div className="team-info d-flex flex-column">
                <h3>Jhesica Lopez</h3>
                <span>Entrenadora corporal</span>
                <ul className="social-icon mt-3">
                  <li><a href="#" className="fa fa-instagram"></a></li>
                  <li><a href="#" className="fa fa-facebook"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


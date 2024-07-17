import React from 'react';

const Hero = () => {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto col-12">
            <div className="hero-text mt-5 text-center">
              <h6 data-aos="fade-up" data-aos-delay="300">¡Nueva forma de construir un estilo de vida saludable!</h6>
              <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">Actualiza tu cuerpo en Gymso Fitness Collpani</h1>
              <a href="#feature" className="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">Empezar</a>
              <a href="#about" className="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay="700">Saber más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

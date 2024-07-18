import React from 'react';

const Contact = () => {
  return (
<section className="contact section" id="contact">
  <div className="container">
    <div className="row">
      <div className="ml-auto col-lg-5 col-md-6 col-12">
        <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">Siéntete libre de preguntar cualquier cosa</h2>
        
        <form action="#" method="post" className="contact-form webform" data-aos="fade-up" data-aos-delay="400" role="form">
          <input type="text" className="form-control" name="cf-name" placeholder="Nombre" />
          
          <input type="email" className="form-control" name="cf-email" placeholder="Correo electrónico" />
          
          <textarea className="form-control" rows="5" name="cf-message" placeholder="Mensaje"></textarea>
          
          <button type="submit" className="form-control" id="submit-button" name="submit">Enviar Mensaje</button>
        </form>
      </div>

      <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
        <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">Donde nos puedes <span>encontrar?</span></h2>
        
        <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i> El Alto - Collpani, Bolivia</p>
        
        <div className="google-map" data-aos="fade-up" data-aos-delay="900">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d402.0505487734838!2d-68.22029812296222!3d-16.527562371450422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1721313893934!5m2!1ses!2sbo" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;


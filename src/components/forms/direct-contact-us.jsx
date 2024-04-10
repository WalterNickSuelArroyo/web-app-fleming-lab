import React from "react";

const DirectContactUs = () => {
  return (
    <>
      <section className="support-area grey-bg pt-125 pb-130">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line right-line mb-20">
                  Ponerse en contacto
                </span>
                <h3 className="tp-section__title mb-70">Necesita Ayuda</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-12">
              <div className="tp-support-form text-center">
                <span>Contáctanos Directamente</span>
                <form onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Introduzca su nombre" />
                  <input type="text" placeholder="Introduzca su correo" />
                  <textarea
                    name="massage"
                    placeholder="Escribe tu mensaje"
                  ></textarea>
                </form>
                <div className="tp-support-form__btn">
                  <button className="tp-btn">Enviar Mensaje</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectContactUs;

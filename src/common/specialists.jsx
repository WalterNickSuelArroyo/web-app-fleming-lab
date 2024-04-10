import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <>
        Calidad <br />
        Superior
      </>
    ),
    des: (
      <>
        Nuestros servicios se distinguen por su alta calidad, <br></br>
        respaldada por un equipo de especialistas.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Promoción de la<br />
         Investigación
      </>
    ),
    des: (
      <>
        Permiten a los estudiantes realizar investigaciones apoyandolos<br></br> en el desarrollo académico y científico.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
        Soporte al <br />Cliente  24/7
      </>
    ),
    des: (
      <>
        Estamos disponibles las 24 horas del día, los 7 días <br></br>de la semana, para brindar soporte y asistencia a nuestros clientes.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
        Equipo de <br /> Expertos
      </>
    ),
    des: (
      <>
        Contamos con un equipo de especialistas expertos en el <br></br>campo de la micología para abordar los desafíos más complejos.
      </>
    ),
  },
];


const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <h3 className="tp-section__title title-white mb-85">
                  ¿Por qué elegirnos?
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;

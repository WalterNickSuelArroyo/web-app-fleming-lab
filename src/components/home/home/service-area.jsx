import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

// slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// slider_content
const slider_content = [
  {
    id: 1,
    icon: "flaticon-hemoglobin-test-meter",
    title: "ANÁLISIS Y DIAGNÓSTICO MICOLÓGICO",
    des: "Servicio de análisis de muestras micológicas para identificar especies de hongos y otros microorganismos. ",
    color_icon: "",
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-blood-test",
    title: "PROGRAMA DE CAPACITACIÓN",
    des: "Programas de capacitación práctica en micología para estudiantes, profesionales de la salud, investigadores y cualquier persona intersada en aprender sobre el mundo de los hongos. ",
    color_icon: "pink-icon",
    color: "pink-hexa",
  },
  {
    id: 3,
    icon: "flaticon-biochemistry",
    title: "CONSULTORÍA PERSONALIZADA",
    des: "Servicio de consultoria especializada en micología para empresas, hospitales, laboratorios clínicos, y otos sectores interesados en la aplicación de hongos. ",
    color_icon: "green-icon",
    color: "green-hexa",
  },
  {
    id: 4,
    icon: "flaticon-hemoglobin-test-meter",
    title: "ESPACIO DE COLABORACIÓN E INVESTIGACIÓN",
    des: "Se ofrece un espacio físico y recursos para que investigadores, científicos, estudiantes y profesionales trabajen en proyectos colaborativos relacionados con la micología. ",
    color_icon: "green-icon",
    color: "green-hexa",
  },
  {
    id: 5,
    icon: "flaticon-blood-test",
    title: "DIVULGACIÓN Y SENSIBILIZACIÓN",
    des: "Organización de eventos, charlas y talleres para la divulgación del conocimiento al público en general y profesionales de la salud  sobre la importancia de los hongos en la salud humana. ",
    color_icon: "green-icon",
    color: "green-hexa",
  },
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section
        className="services-area pt-95 pb-90 grey-bg mt-60 fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  Nuestros servicios
                </span>
                <h3 className="tp-section__title mb-50">Areas de Servicio</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-services d-flex align-items-center">
                <div className="services-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="services-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="services-slider  wow fadeInUp" data-wow-delay=".3s">
            <div>
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="service-active"
              >
                {slider_content.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="services-item mb-40">
                      <div
                        className={`services-item__icon ${item.color_icon} mb-30`}
                      >
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className="services-item__content">
                        <h4 className="services-item__tp-title mb-30">
                          <Link href="/">{item.title}</Link>
                        </h4>
                        <p>{item.des}</p>
                        <div className="services-item__btn">
                          <Link
                            className={`btn-hexa ${item.color}`}
                            href="/"
                          >
                            <i></i>Leer más
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;

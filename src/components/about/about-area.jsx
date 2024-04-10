import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">

                        <Count add_style={true} number={3} />
                      </h3>
                      <i>
                        Años de <br />
                        Experiencia
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg-05.jpg"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-bg-06.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                  Garantizamos que cada estudiante o investigador alcance su máximo potencial.
                  </h3>
                  <ul>
                    <li>
                      
                    </li>
                  </ul>
                  <p className=" mr-20 mb-40">
                    <b>Historia:</b> En el Programa de Formación Alexander Fleming, nos apasiona la micología y su potencial para impactar positivamente en diversos campos. Nuestra historia comenzó con la visión de la Tecnóloga Médica Gloria Suel, una apasionada de la micología, quien decidió crear un centro de formación que no solo brindará servicios de consultoría y capacitación especializada, sino que también sirviera como centro de investigación y desarrollo en este fascinante campo.
                  </p>
                </div>
                <div className="about-content__btn">
                  <Link href="/contact" className="tp-btn">
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;

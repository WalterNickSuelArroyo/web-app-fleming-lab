import Count from "@/common/count";
import Link from "next/link";
import React from "react";


// content
const content = {
  left_img: "assets/img/about/about-bg-01.png",
  experience_count: 3,
  experience_count_text: (
    <>
      Años de <br />
      Experiencia
    </>
  ),
  title: "Acerca de Nosotros",
  section_title: "El Mejor Programa de Formación en Procedimientos Técnicos, Análisis e Investigación",
  section_sub_title:
    "Contamos con un laboratorio integral para diferentes ensayos.",
  section_des: (
    <>
      Ofrecemos servicios de formación en procedimientos técnicos del área preanalítica y analítica con personal altamente capacitado y con mucha experiencia. Nos esforzamos por ser un centro de formación integral para estudios clínicos y proyectos de investigación, comprometidos con la excelencia y la formación de calidad para los estudiantes.
    </>
  ),
  about_info_list: [
    {
      text: "Programa de capacitación.",
    },
    {
      text: "Consultoría personalizada.",
    },
    {
      text: "Espacio de colaboración e investigación.",
    },
    {
      text: "Divulgación y sensibilización.",
    },
    {
      text: "Análisis y diagnóstico micológico.",
    },
  ],
};

const {
  left_img,
  experience_count,
  experience_count_text,
  title,
  section_title,
  section_sub_title,
  section_des,
  about_info_list,
} = content;

const About = () => {
  return (
    <>
      <section id="tp-about-scroll" className="about-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="about__thumb mb-60 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about__img">
                  <img src={left_img} alt="about-bg-img" />
                  <div className="about__exprience">
                    <h3 className="counter">
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i>{experience_count_text}</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-about__content pt-125 ml-60 mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div className="tp-section">
                  <span className="tp-section__sub-title left-line mb-25">
                    {title}
                  </span>
                  <h3 className="tp-section__title tp-ab-sm-title mb-45">
                    {section_title}
                  </h3>
                  <i>{section_sub_title}</i>
                  <p className=" mr-20 mb-45">{section_des}</p>
                </div>
                <div className="tp-about__info-list mb-55">
                  <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {list.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/contact">
                    contáctanos
                  </Link>
                  <Link className="tp-btn-second ml-25" href="/about">
                    Sobre nosotros
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

export default About;

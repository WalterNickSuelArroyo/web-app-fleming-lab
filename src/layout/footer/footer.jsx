import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Nuestros Enlaces",
      cls: "footer-col-2",
      links: [
        { name: "Servicios", link: "/service" },
        { name: "Contáctanos", link: "/contact" },
        { name: "Sobre Nosotros", link: "/about" },
      ],
    },
    {
      id: 2,
      title: "Información de Contacto",
      cls: "footer-col-3",
      links: [
        { name: "Mz. 67 Lt. 15 Armando V. Los Olivos, Lima, Peru" },
        { name: "(+51)931 128 610" },
        { name: "alexander.fleming.lab@gmail.com" },
      ],
    },
  ],
  contact_info: [
    {
      id: 1,
      title: "Quick Links",
      support_info: [
        " 27 Division St, New York, NY 10002, USA",
        "(+51) 931 128 610",
        " juvenus.services@gmail.com",
      ],
      office_time: "Office Hours: 9AM - 4PM",
      off_day: " Friday - Wekend Day",
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="mailto:juvenus.services@gmail.com"> Juvenus</Link>.<i> Todos los derechos reservados</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <a href="index">
                      <img src="/assets/img/logo/white_logo_o.png" alt="logo" />
                    </a>
                  </h4>
                  <p>
                    Programa de Formación para estudiantes y profesionales de Laboratorio
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {
                footer_info.map(item =>  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <h4 className="footer-widget__title mb-20">{item.title}</h4>
                  <div className="footer-widget__links">
                    <ul>

                      {
                        item.links.map((link, i) => <li key={i}>
                        <Link href={`${link?.link ? link.link : "/"}`}>{link.name}</Link>
                      </li> )
                      }
                    
                    </ul>
                  </div>
                </div>
              </div>)
              }
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright-info info-direction">
                  <ul className="d-flex align-items-center">
                    <li>
                      <a href="#">Términos y condiciones</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

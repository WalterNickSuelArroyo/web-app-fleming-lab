import Link from "next/link";
import React from "react";

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
            } `}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>CONTÁCTANOS CON TODA CONFIANZA</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="https://wa.link/uten11" target="_blank" rel="noopener noreferrer">+51 931 128 610</a>
                      </h4>
                      <a href="mailto:alexander.fleming.lab@gmail.com">alexander.fleming.lab@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Nuestros enlaces
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/service-3">Servicios</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contáctanos</Link>
                        </li>
                        <li>
                          <Link href="/about">Sobre Nosotros</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                        Horario de Apertura
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li>Horario de Oficina: 7 AM - 8 PM</li>
                          <li>Lunes - Domingo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Información de Contacto
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>Mz. 67 Lt. 15 Armando V. Los Olivos, Lima, Peru </li>
                        <li>
                          <a href="https://wa.link/uten11" target="_blank" rel="noopener noreferrer">
                            (+51)931 128 610
                          </a>
                        </li>
                        <li>
                          <a href="mailto:alexander.fleming.lab@gmail.com">
                            alexander.fleming.lab@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="https://www.youtube.com/@AlexanderFlemingLab" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=61558395356697" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>

                      © Copyright © {new Date().getFullYear()}
                      <Link href="mailto:juvenus.services@gmail.com"> Juvenus</Link>.
                      <i> Todos los derechos reservados</i>
                    </span>
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
        </div>
      </footer>
    </>
  );
};

export default FooterFour;

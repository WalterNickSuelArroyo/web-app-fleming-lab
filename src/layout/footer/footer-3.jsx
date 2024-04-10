import Link from "next/link";
import React from "react";

const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="footer-area tp-common-area footer-white-content theme-bg pt-105">
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row pb-40 pt-50">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="footercontact__icon">
                      <i className="flaticon-placeholder"></i>
                    </div>
                    <div className="footercontact__content">
                      <span className="footercontact__title">
                        <Link href="/contact">
                        Mz. 67 Lt. 15 Armando V. Los Olivos, Lima, Peru <br /> Nya 10982 USA
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="footercontact__icon fw-pink-icon">
                      <i className="flaticon-mail"></i>
                    </div>
                    <div className="footercontact__content fw-pink-content">
                      <a href="mailto:alexander.fleming.lab@gmail.com">
                        alexander.fleming.lab@gmail.com
                      </a>
                      <a href="tel:+08987878773345">+08 98787 8773 345 </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="footercontact__icon fw-green-icon">
                      <i className="flaticon-24-hours"></i>
                    </div>
                    <div className="footercontact__content">
                      <span>Mon - Sat - 09:00PM - 06:00AM</span>
                      <span>Sunday - Off Day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom-tp">
            <div className="container">
              <div className="footer-bottom-border">
                <div className="row">
                  <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-12">
                    <div className="footer-widget__copyright cpy-white-content">
                      <span>
                        © Copyright © {new Date().getFullYear()}
                        <Link href="mailto:juvenus.services@gmail.com"> Juvenus</Link>.
                        <i> Todos los derechos reservados</i>
                      </span>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-12">
                    <div className="footer-widget__copyright-info info-direction cpy-white-content-info">
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
        </div>
      </footer>
    </>
  );
};

export default FooterThree;

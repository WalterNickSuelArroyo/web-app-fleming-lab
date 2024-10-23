import MobileMenus from '@/layout/header/mobile-menus';
import ImagePopup from '@/modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from "react";


const images = [
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  }
];


const Sidebar = ({ isActive, setIsActive }) => {

 
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img);

 
  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${
          isActive ? "tp-sidebar-opened" : ""
        }`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
            <img src="/assets/img/logo/white_logo_o.png" alt="logo" />
          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <p className=" d-none d-xl-block">
            Our mission is to ensure the generation of accurate and precise
            findings.
          </p>
          <span>Contáctanos</span>
          <a href="#">
            <i className="fa-solid fa-star"></i>Mz. 67 Lt. 15 Armando V. Los Olivos, Lima, Peru
          </a>
          <a href="https://wa.me/931392043" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-star"></i>+51 931 392 043
          </a>
          <a href="mailto:noreply@envato.com">
            <i className="fa-solid fa-star"></i>alexander.fleming.lab@gmail.com
          </a>
        </div>
        <div className="tpsideinfo__content-inputarea mb-60 d-none d-xl-block">
          <span>Get Update</span>
          <div className="tpsideinfo__content-inputarea-input">
            <form action="#">
              <input type="email" placeholder="Escribe tu correo" />
              <button className="tpsideinfo__content-inputarea-input-btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="tpsideinfo__socialicon">
          <a href="https://www.youtube.com/@AlexanderFlemingLab" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558395356697" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61558395356697" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram-f"></i>
          </a>
        </div>
      </div>
      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>

      {/* image light box start */}
      {isOpen && (
        <imgPopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;

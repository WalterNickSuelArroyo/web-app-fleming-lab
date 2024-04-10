import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImagePopup from "@/modals/ImagePopup";


// slider setting
const setting = {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// gallery_content
const gallery_content = [
  {
    id: 1,
    img: "assets/img/gallery/gal-thum-01.jpg",
    text1: "Programa de capacitación",
  },
  {
    id: 2,
    img: "assets/img/gallery/gal-thum-02.jpg",
    text1: "Consultoría personalizada",
  },
  {
    id: 3,
    img: "assets/img/gallery/gal-thum-03.jpg",
    text1: "Espacio de colaboración e investigación",
  },
  {
    id: 4,
    img: "assets/img/gallery/gal-thum-04.jpg",
    text1: "Divulgacion y sensibilización",
  },
  {
    id: 5,
    img: "assets/img/gallery/gal-thum-05.jpg",
    text1: "Analisis y diagnóstico micológico",
  },
];


const Gallery = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

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
  const images = gallery_content.map((item) => item.img);

  return (
    <>
      <section
        className="gallery-area grey-bg pt-120 pb-130"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  galería de trabajo
                </span>
                <h3 className="tp-section__title mb-70">Galeria de Nuestro Programa</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            className="tp-gallery ml-15 mr-15 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="swiper-container gall-active">
              <Swiper {...setting} loop={isLoop} modules={[Navigation]}>
                {gallery_content.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-gallery__item p-relative mb-70">
                      <div className="tp-gallery__img p-relative">
                        <img src={item.img} alt="gallery-img" />
                      </div>
                      <div className="tp-gallery__content">
                        <h4 className="tp-gallery__title">
                          <Link href="/">{item.text1}</Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* image light box start */}
      {isOpen && (
        <imgPopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Gallery;

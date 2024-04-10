import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Counter from "../../../common/counter";
import Feedback from "./feedback";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
import Specialists from "../../../common/specialists";

const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <ServiceArea />
      <About />
      <Counter />
      <Gallery />
      <Specialists />
      <Appointment />
      <Feedback />
    </>
  );
};

export default HomeOne;

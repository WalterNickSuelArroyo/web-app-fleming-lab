import About from "@/components/about/about";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Sobre Nosotros" />
      <About />
    </Wrapper>
  );
};

export default index;

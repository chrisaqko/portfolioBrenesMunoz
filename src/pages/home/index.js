import React, { Fragment } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import dynamic from "next/dynamic";
import Hero from "../../components/sections/hero/hero";
import About from "../../components/sections/about/about";
import ProjectSection from "../../components/sections/ProjectSection/ProjectSection";
import ServiceSection from "../../components/sections/ServiceSection/ServiceSection";
import SoftwareSection from "../../components/sections/SoftwareSection/SoftwareSection";
import Footer from "../../components/layout/footer/Footer";
import Scrollbar from "../../components/layout/scrollbar/scrollbar";

import Head from "next/head";

const ScrollTextAnimation = dynamic(
  () => import("../../components/sections/ScrollTextAnimation/ScrollTextAnimation"),
  { ssr: false },
);

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Architect Jonnathan Brenes</title>
        <meta
          name="description"
          content="Portafolio de arquitectura de Jonnathan Brenes"
        />
      </Head>
      <Navbar
        hclass={"wpo-site-header wpo-header-style"}
        Logo={Logo}
        col1={"col-lg-3 col-md-3 col-3 d-lg-none dl-block"}
        col2={"col-lg-5 col-md-6 col-6"}
        col3={"col-lg-5 col-md-1 col-1"}
        col4={"col-lg-2 col-md-2 col-2"}
      />
      <Hero />
      <ScrollTextAnimation />
      <About hclass={"wpo-about-section section-padding pb-0"} />
      <SoftwareSection hclass={"wpo-partners-section fade_bottom"} />
      <ProjectSection hclass={"wpo-project-section section-padding"} />
      <ServiceSection hclass={"wpo-service-section"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;

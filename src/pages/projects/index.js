import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import NavbarS4 from "../../components/layout/NavbarS4/NavbarS4";
import PageTitle from "../../components/layout/pagetitle/PageTitle";
import SoftwareSection from "../../components/sections/SoftwareSection/SoftwareSection";
import Footer from "../../components/layout/footer/Footer";
import Scrollbar from "../../components/layout/scrollbar/scrollbar";
import ProjectSection from "../../components/sections/ProjectSection/ProjectSection";
import Head from "next/head";

const ScrollTextAnimation = dynamic(
  () => import("../../components/sections/ScrollTextAnimation/ScrollTextAnimation"),
  { ssr: false }
);

const ProjectPage = () => {
  return (
    <Fragment>
      
      <Head>
        <title>Architect Jonnathan Brenes</title>
        <meta
          name="description"
          content="Portafolio de arquitectura de Jonnathan Brenes"
        />
      </Head>
      
      <NavbarS4
        hclass={"wpo-site-header wpo-header-style-s11"}
        Logo={"/images/logo/IMAGOTIPO.webp"} 
        Width={200} 
        Height={100}
        col1={"col-lg-3 col-md-3 col-3 d-lg-none dl-block"}
        col2={"col-lg-2 col-md-4 col-6"}
        col3={"col-lg-7 col-md-1 col-1"}
        col4={"col-lg-3 col-md-4 col-2"}
      />
      <PageTitle pageTitle={"Projects"} pagesub={"Portfolio"} />
      <ScrollTextAnimation />
      <ProjectSection
        hclass={"wpo-project-section title section-padding pt-0"}
      />
      <SoftwareSection hclass={"wpo-partners-section fade_bottom"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectPage;

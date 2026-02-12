import React, { Fragment } from "react";
import NavbarS4 from "../../components/NavbarS4/NavbarS4";
import dynamic from "next/dynamic";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Contactpage from "../../components/Contactpage/Contactpage";

const ScrollTextAnimation = dynamic(
  () => import("../../components/ScrollTextAnimation/ScrollTextAnimation"),
  { ssr: false },
);

const ContactPage = () => {
  return (
    <Fragment>
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
      <PageTitle pageTitle={""} pagesub={"Contact Me"} />
      <ScrollTextAnimation />
      <Contactpage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;

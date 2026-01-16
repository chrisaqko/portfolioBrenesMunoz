import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarS4 from "../../components/NavbarS4/NavbarS4";
import PageTitle from "../../components/pagetitle/PageTitle";
import Projects from "../../api/projects";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/IMAGOTIPO.svg";
import VideoModal from "../../components/ModalVideo/VideoModal";
import Image from "next/image";
import Head from "next/head";


const ProjectData = (props) => {
  const router = useRouter();

  const ProjectData = Projects.find((item) => item.slug === router.query.slug);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

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
        Logo={Logo}
        col1={"col-lg-3 col-md-3 col-3 d-lg-none dl-block"}
        col2={"col-lg-2 col-md-4 col-6"}
        col3={"col-lg-7 col-md-1 col-1"}
        col4={"col-lg-3 col-md-4 col-2"}
      />

      <PageTitle
        pageTitle={ProjectData?.title}
        pagesub={ProjectData?.subtitle}
      />

      <section className="project-single-page">
        <div className="container-fluid">
          <div
            className="project-image scroll-text-animation"
            data-animation="fade_from_bottom"
          >
            <Image src={ProjectData?.sing} alt="" />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8  col-12">
              <div className="content">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  {ProjectData?.title}
                </h2>
                <p>
                  <span>M</span>odern Buildings Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has beening
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a good type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was a popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim
                  situt id amet cyrium. Nulla thurg varius purus bibendum
                  pellentesque eu sit nascetur vitae. Nibh tortor etrutnibh
                  tincidunt tempor proin. Est placerat felis pellentesque
                  temupus condimentum consectetur. Faucibus nunc pellentesque ac
                  mus posuere aliquam mor augue orci. Egestas donec sit
                  pellentesque lacus.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4  col-12 scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              <div className="description">
                <h3>Project Info:</h3>
                <ul>
                  <li>
                    <span>Project :</span> <span>{ProjectData?.title}</span>
                  </li>
                  <li>
                    <span>Architect :</span>{" "}
                    <span>{ProjectData?.architect}</span>
                  </li>
                  <li>
                    <span>Clients :</span> <span>{ProjectData?.client}</span>
                  </li>
                  <li>
                    <span>Date :</span> <span>{ProjectData?.date}</span>
                  </li>
                  <li>
                    <span>Location :</span> <span>{ProjectData?.location}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solve-section">
        <div className="container-fluid">
          <div className="project-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Elevations & Sections
                </h2>
              </div>
              <div className="col-lg-6 col-12">
                <p
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
            </div>
          </div>
          <div className="image-wrap">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.elevationsSections[0]} alt="" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.elevationsSections[1]} alt="" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.elevationsSections[2]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solve-section">
        <div className="container-fluid">
          <div className="project-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Floor Plans
                </h2>
              </div>
              <div className="col-lg-6 col-12">
                <p
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
            </div>
          </div>
          <div className="image-wrap">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image
                    src={ProjectData?.floorPlans[2]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image
                    src={ProjectData?.floorPlans[0]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image
                    src={ProjectData?.floorPlans[1]}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solve-section">
        <div className="container-fluid">
          <div className="project-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Isometric Views
                </h2>
              </div>
              <div className="col-lg-6 col-12">
                <p
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
            </div>
          </div>
          <div className="image-wrap">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.isometricViews[0]} alt="" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.isometricViews[1]} alt="" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.isometricViews[2]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solve-section">
        <div className="container-fluid">
          <div className="project-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Architectural Visualizations
                </h2>
              </div>
              <div className="col-lg-6 col-12">
                <p
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
            </div>
          </div>
          <div className="image-wrap">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.visualizations[0]} alt="" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.visualizations[1]} alt="" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                data-animation="fade_from_bottom"
              >
                <div className="image">
                  <Image src={ProjectData?.visualizations[2]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summery-section">
        <div className="container-fluid">
          <div className="project-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <h2
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Project Summary and Solutions
                </h2>
              </div>
              <div className="col-lg-6 col-12">
                <p
                  className="scroll-text-animation"
                  data-animation="fade_from_bottom"
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
            </div>
          </div>
          <div
            className="wraper"
            style={{ backgroundImage: `url(${"/images/wpo-video-bg-5.jpg"})` }}
          >
            <div className="video-wrap">
              <div className="video-holder">
                <VideoModal />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectData;

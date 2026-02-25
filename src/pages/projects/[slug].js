import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarS4 from "../../components/layout/NavbarS4/NavbarS4";
import PageTitle from "../../components/layout/pagetitle/PageTitle";
import Projects from "../../api/projects";
import Footer from "../../components/layout/footer/Footer";
import Scrollbar from "../../components/layout/scrollbar/scrollbar";
import Image from "next/image";
import Head from "next/head";
import RollingText from "../../components/sections/RollingText/RollingText";

const ProjectData = (props) => {
  const router = useRouter();

  const ProjectData = Projects.find((item) => item.slug === router.query.slug);

  const GalleryComponent = ProjectData?.galleryComponent;

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
        Logo={"/images/logo/IMAGOTIPO.webp"}
        Width={200}
        Height={100}
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
            <Image src={ProjectData?.sing} width={2000} height={500} alt="" />
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
                <p style={{ whiteSpace: "pre-line" }}>
                  {ProjectData?.description}
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
                  {ProjectData?.drawingSet && (
                    <div className="wpo-about-section">
                      <div className="content">
                        <div
                          className="about-btn "
                          style={{
                            margin: "0",
                            marginTop: "40px",
                            display: "flex",
                            gap: "20px",
                          }}
                        >
                          <Link
                            onClick={ClickHandler}
                            href={ProjectData?.drawingSet}
                            className="theme-btn"
                          >
                            <RollingText text={"Drawing Set"} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {ProjectData?.visualizations?.length > 0 && (
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
                    {ProjectData?.visualizationsDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="row">
                {ProjectData.visualizations.map((img, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    <div className="image">
                      <Image src={img} width={300} height={300} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {ProjectData?.built?.length > 0 && (
        <section className="solve-section">
          <div className="container-fluid">
            <div className="project-title">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <h2
                    className="scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    Built Project
                  </h2>
                </div>
                <div className="col-lg-6 col-12">
                  <p
                    className="scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    {ProjectData?.builtDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="row">
                {ProjectData.built.map((img, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    <div className="image">
                      <Image src={img} width={300} height={300} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {ProjectData?.moodBoard?.length > 0 && (
        <section className="solve-section">
          <div className="container-fluid">
            <div className="project-title">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <h2
                    className="scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    Mood Board
                  </h2>
                </div>
                <div className="col-lg-6 col-12">
                  <p
                    className="scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    {ProjectData?.moodBoardDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="row">
                {ProjectData.moodBoard.map((img, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    <div className="image">
                      <Image src={img} width={300} height={300} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {ProjectData?.floorPlans?.length > 0 && (
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
                    {ProjectData?.floorPlansDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="row">
                {ProjectData.floorPlans.map((img, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    <div className="image">
                      <Image src={img} width={300} height={300} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {ProjectData?.elevationsSections?.length > 0 && (
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
                    {ProjectData?.elevationsSectionsDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="row">
                {ProjectData.elevationsSections.map((img, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    <div className="image">
                      <Image src={img} width={300} height={300} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {ProjectData?.isometricViews?.length > 0 && (
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
                    {ProjectData?.isometricViewsDesc}
                  </p>
                </div>
              </div>
            </div>
            <div className="image-wrap">
              <div className="row">
                {ProjectData.isometricViews.map((img, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-12 scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    <div className="image">
                      <Image src={img} width={300} height={300} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {GalleryComponent && (
        <section className="summery-section">
          <div className="container-fluid">
            <div className="project-title">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <h2
                    className="scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    Project Gallery
                  </h2>
                </div>
                <div className="col-lg-6 col-12">
                  <p
                    className="scroll-text-animation"
                    data-animation="fade_from_bottom"
                  >
                    {ProjectData?.projectGalleryDesc}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="wraper"
              style={{
                backgroundImage: `url(${"/images/wpo-video-bg-5.jpg"})`,
              }}
            >
              <div>{GalleryComponent && <GalleryComponent />}</div>
            </div>
          </div>
        </section>
      )}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectData;

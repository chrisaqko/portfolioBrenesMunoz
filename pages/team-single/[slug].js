import React, { Fragment } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import NavbarS4 from "../../components/NavbarS4/NavbarS4";
import PageTitle from "../../components/pagetitle/PageTitle";
import Teams from "../../api/team";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/IMAGOTIPO.svg";
import arrow from "/public/images/team-single/arrow.svg";
import Image from "next/image";
import Head from "next/head";


const ScrollTextAnimation = dynamic(
  () => import("../../components/ScrollTextAnimation/ScrollTextAnimation"),
  { ssr: false }
);

const TeamSinglePage = () => {
  const router = useRouter();

  const teamSingle = Teams.find((item) => item.slug === router.query.slug);

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
        pageTitle={teamSingle?.title}
        pagesub={"Architect & Interior Designer"}
      />
      <ScrollTextAnimation />
      <section className="wpo-teame-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="left-sidbar">
                <div className="image">
                  <Image src={teamSingle?.Sime} alt="" />
                </div>
                <div className="info-description">
                  <h2 className="fade_bottom">Professional Info.</h2>
                  <p>
                    <span>I</span> am an Architecture graduate with over two
                    years of professional experience working in an interior
                    design studio, where I have contributed to projects of
                    diverse typologies and scales, including residential,
                    commercial, cultural, and hospitality design. This exposure
                    has allowed me to develop a solid understanding of how
                    architectural concepts adapt to different programs, users,
                    and contextual conditions.
                  </p>
                  <p>
                    My work focuses on translating design ideas into clear and
                    buildable architectural solutions through architectural
                    drawings, 3D modeling, and visual representation. Using
                    tools such as AutoCAD, Revit, SketchUp, and Adobe Creative
                    Suite, I approach each project with a balance of technical
                    precision and design sensitivity, seeking to create
                    functional, coherent, and meaningful spaces while continuing
                    to grow professionally within collaborative design
                    environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="right-sidbar">
                <div className="personal-info">
                  <h3>Personal Info</h3>
                  <ul>
                    <li>
                      <span>Position:</span> <span>Architect</span>
                    </li>
                    <li>
                      <span>Practice Area:</span>{" "}
                      <span>Interior & Architecture</span>
                    </li>
                    <li>
                      <span>Experience:</span>{" "}
                      <span>2 years, Toolip Staging</span>
                    </li>
                    <li>
                      <span>Address:</span> <span>San José, Costa Rica</span>
                    </li>
                    <li>
                      <span>Phone:</span> <span>(+506) 6024-9502</span>
                    </li>
                    <li>
                      <span>Email:</span> <span>jbrenarq06@outlook.com</span>
                    </li>
                  </ul>
                </div>
                <div className="education-info">
                  <h3>Education</h3>
                  <ul>
                    <li>
                      <Image src={arrow} alt="" />
                      <span>2025 BArch. Universidad Latina de Costa Rica</span>
                    </li>
                    <li>
                      <Image src={arrow} alt="" />
                      <span>
                        2018 High School Diploma: Colegio Seráfico San Francisco
                      </span>
                    </li>
                  </ul>
                </div>
                <div style={{ paddingRight: "25px" }}>
                  <div className="skill_wrap">
                    <div className="skill">
                      <h3>Professional Skills</h3>
                      <div className="progress_item">
                        <span>3D Modelling</span>
                        <div className="progres">
                          <div
                            className="progress-value"
                            style={{ width: "95%" }}
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress_item">
                        <span>Rendering</span>
                        <div className="progres">
                          <div
                            className="progress-value"
                            style={{ width: "90%" }}
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress_item">
                        <span>Interior Design</span>
                        <div className="progres">
                          <div
                            className="progress-value"
                            style={{ width: "85%" }}
                          >
                            <span>85%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress_item">
                        <span>Furniture Design</span>
                        <div className="progres">
                          <div
                            className="progress-value"
                            style={{ width: "70%" }}
                          >
                            <span>70%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress_item">
                        <span>Architectural Drafting</span>
                        <div className="progres">
                          <div
                            className="progress-value"
                            style={{ width: "95%" }}
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_wrap">
                    <div className="skill">
                      <div style={{ paddingTop: "40px" }}>
                        <h3>Languages</h3>
                      </div>
                      <div className="progress_item">
                        <span>Spanish</span>
                        <div className="progres">
                          <div
                            className="progress-value"
                            style={{ width: "100%" }}
                          >
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress_item">
                        <span>English</span>
                        <div className="progres">
                          <div
                            className="progress-value"
                            style={{ width: "80%" }}
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnerSection hclass={"wpo-partners-section fade_bottom"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamSinglePage;

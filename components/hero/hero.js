import React from "react";
import Link from "next/link";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

/* heroTeam */

import Image from "next/image";

const Hero = () => {
  return (
    <section className="wpo-hero-slider">
      <Swiper
        className="swiper-container"
        modules={[Navigation, A11y, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2000}
        parallax={true}
        navigation={false}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
          },
        }}
      >
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{
              backgroundImage: `url(${"/images/slider/slide-1.jpeg"})`,
            }}
          >
            <div className="container">
              <div className="slide-content">
                <div className="slide-sub-title">
                  <h2>
                    Designing for Everyone:
                    <span>
                      <Image
                        src={"/images/slider/hero-text.jpeg"}
                        width={500}
                        height={250}
                        alt=""
                      />
                    </span>
                  </h2>
                  <h2>Accessibility First.</h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${"/images/slider/slide-2.jpg"})` }}
          >
            <div className="container">
              <div className="slide-content">
                <div className="slide-sub-title">
                  <h2>
                    Human-Centric Design:{" "}
                    <span>
                      <Image
                        src={"/images/slider/hero-text-2.jpeg"}
                        width={500}
                        height={250}
                        alt=""
                      />
                    </span>{" "}
                    Connection First.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${"/images/slider/slide-3.webp"})` }}
          >
            <div className="container">
              <div className="slide-content">
                <div className="slide-sub-title">
                  <h2>
                    Vision in Every Detail,{" "}
                    <span>
                      <Image
                        src={"/images/slider/hero-text-3.webp"}
                        width={500}
                        height={250}
                        alt=""
                      />
                    </span>{" "}
                    Integrity in Every Line.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${"/images/slider/slide-4.webp"})` }}
          > 1561 571
            <div className="container">
              <div className="slide-content">
                <div className="slide-sub-title">
                  <h2>
                    Serenity in Every Sip,{" "}
                    <span>
                      <Image
                        src={"/images/slider/hero-text-4.webp"}
                        width={500}
                        height={250}
                        alt=""
                      />
                    </span>{" "}
                    Beauty in Every Shade.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
      <AnchorLink href="#about" className="scroll-btn">
        <span>Scroll For More</span>
        <div className="scroll-befor">
          <Image src={"/images/down-arrow.svg"} width={18} height={10} alt="" />
        </div>
      </AnchorLink>
    </section>
  );
};

export default Hero;

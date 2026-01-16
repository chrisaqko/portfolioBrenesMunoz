import React from "react";
import Link from "next/link";
import { Navigation, Pagination, A11y } from  'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Slide1 from '/public/images/slider/hero-text.jpeg';
import Slide2 from '/public/images/slider/hero-text-2.jpeg';

/* heroTeam */
import heroTeam from '/public/images/team/hero-team/1.jpg'
import heroTeam2 from '/public/images/team/hero-team/2.jpg'
import heroTeam3 from '/public/images/team/hero-team/3.jpg'
import heroTeam4 from '/public/images/team/hero-team/4.jpg'
import arrow from '/public/images/down-arrow.svg'
import Image from "next/image";



const Hero = () => {

  

    return (
        <section className="wpo-hero-slider">
            <Swiper className="swiper-container" modules={[Navigation, A11y, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation={false}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    type: 'fraction',
                    renderFraction: (currentClass, totalClass) => {
                        return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
                    },
                }}


            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{
                        backgroundImage: `url(${'/images/slider/slide-1.jpeg'})`
                    }}>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Designing for Everyone:<span><Image src={Slide1} alt="" /></span></h2>
                                    <h2>Accessibility First</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Innovation in Every Line, Strength <span><Image
                                        src={Slide2} alt="" /></span> in Every
                                        Build</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpeg'})` }}>
                        <div className="container">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <h2>Innovation in Every Line, Strength <span><Image
                                        src={Slide2} alt="" /></span> in Every
                                        Build</h2>
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
                    <Image src={arrow} alt="" />
                </div>
            </AnchorLink>

        </section>
    );
};

export default Hero;

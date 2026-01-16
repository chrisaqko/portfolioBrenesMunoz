import React from "react";
import VideoModal from "../ModalVideo/VideoModal";
import Link from 'next/link';
import CountUp from 'react-countup';
import abImg from '/public/images/about/about-1/1.jpg';
import abImg2 from '/public/images/about/about-1/2.jpg';
import RollingText from "../RollingText/RollingText";
import Image from "next/image";

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section id="about" className={"" + props.hclass}>
            <div className="about-wrap">
                <div className="content">
                    <h2 className="scroll-text-animation" data-animation="fade_from_right">About me</h2>
                    <p className="fade_bottom">I am an architect focused on designing comfortable, open, and accessible spaces that respond to both people and function. My work emphasizes natural light, ventilation, and clarity, creating environments where users feel safe, welcome, and at ease. I approach each project with a detailed and context-aware mindset, adapting materials and design strategies to the social and climatic conditions of each place. I am especially interested in social inclusion and community-oriented spaces, aiming to create architecture that is visually coherent, meaningful, and deeply connected to the people who inhabit it.</p>
                    <div className="about-btn ">
                        <Link onClick={ClickHandler} href="/about" className="theme-btn">
                            <RollingText text={'Discover More'}/>
                        </Link>
                        <div className="video-wrap">
                            <div className="video-holder">
                                <VideoModal />
                            </div>
                            <span>Watch Videos</span>
                        </div>
                    </div>
                    <div className="about-funfact fade_bottom">
                        <h3><span><CountUp end={2} enableScrollSpy /></span><span className="icon">+</span></h3>

                        <h4>Years Of <br />
                            Experience</h4>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="image-1  poort-in-right">
                    <Image src={abImg} alt="" />
                </div>
                <div className="image-2 poort-in-right">
                    <Image src={abImg2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;

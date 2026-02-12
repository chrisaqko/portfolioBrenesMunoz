import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import Image from "next/image";


const softwares = [
    {
        id: "01",
        pimg: '/images/software/sketchup.webp',
    },
    {
        id: "02",
        pimg: '/images/software/autodeskrevit.webp',
    },
    {
        id: "03",
        pimg: '/images/software/autocad.webp',
    },
    {
        id: "04",
        pimg: '/images/software/illustrator.webp',
    },
    {
        id: "05",
        pimg: '/images/software/photoshop.webp',
    },
    {
        id: "06",
        pimg: '/images/software/afterfx.webp',
    },
    {
        id: "07",
        pimg: '/images/software/d5render.webp',
    },
    {
        id: "08",
        pimg: '/images/software/lumion.webp',
    },
    {
        id: "09",
        pimg: '/images/software/v-ray.webp',
    },

]

const SoftwareSection = (props) => {


    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 757,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <section className={"" +props.hclass}>
            <h2 className="d-none">No Content</h2>
            <ul className="partners-slider">
                <Slider {...settings}>
                    {softwares.map((software, pitem) => (
                        <div key={pitem}>
                            <li>
                                <Image src={software.pimg} 
                                alt="" 
                                width={50}
                                height={50}
                                className="object-contain mx-auto"/>
                            </li>
                        </div>
                    ))}
                </Slider>
            </ul>
        </section>
    )

}

export default SoftwareSection;




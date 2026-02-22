import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";
import Image from 'next/image';

const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid p-0">
                <div className="service-top">
                    <div className="image">
                        <Image src={"/images/service/serviceImage.webp"} width={1200} height={600} alt="service-bg" />
                    </div>
                    <div className="content">
                        <h2 className="fade_bottom">Designing Spaces That Inspire, Connect, and Endure.</h2>
                        <p className="fade_bottom">Architectural and design services that merge creativity with functionality, spanning visualizations, bespoke furniture, interior design, and strategic planning. Ideas are transformed into practical, inspiring spaces, with each project executed to ensure environments that are compelling, sustainable, adaptable, and client-focused.</p>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {Services.slice(0, 4).map((service, item) => (
                            <div className="col-lg-3 col-md-6 col-12 fade_bottom" key={item}>
                                <div className="service-card h-100">
                                    <div className="icon">
                                        <Image src={service.Icon} width={50} height={50} alt="icon" />
                                    </div>
                                    <h2><Link onClick={ClickHandler} href={''} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;


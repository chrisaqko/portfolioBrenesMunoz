import React, { Fragment } from 'react';
import NavbarS4 from '../../components/layout/NavbarS4/NavbarS4';
import dynamic from 'next/dynamic';
import PageTitle from '../../components/layout/pagetitle/PageTitle'
import ServiceSectionS9 from '../../components/sections/ServiceSectionS9/ServiceSectionS9';
import SoftwareSection from "../../components/sections/SoftwareSection/SoftwareSection";
import Footer from '../../components/layout/footer/Footer';
import Scrollbar from '../../components/layout/scrollbar/scrollbar';
import Logo from '/public/images/IMAGOTIPO.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/sections/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );


const ServicePage = () => {
    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                            col2={'col-lg-2 col-md-4 col-6'}
                            col3={'col-lg-7 col-md-1 col-1'}
                            col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={'What’s part of the service'} pagesub={'Services'} />
            <ScrollTextAnimation />
            <ServiceSectionS9 hclass={'wpo-service-section-s12 section-padding'} showTitle={false} />
            <SoftwareSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default ServicePage;




import React from 'react'
import Link from 'next/link';

// images
import Logo from '/public/images/IMAGOTIPO.svg' 
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="blog" />
                                </div>
                                <p>Elit commodo nec urna erat morbi at hac turpis aliquam. In tristique elit nibh
                                    turpis. Lacus volutpat ipsum convallis tellus pellentesque etiam.</p>
                                <div className="social-widget">
                                    <ul>
                                    <Link onClick={ClickHandler} href="https://www.linkedin.com/in/jonnathan-brenes-mu%C3%B1oz-12729824a/"><i className="ti-linkedin"></i></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <ul>
                                    <li>jbrenarq06
                                        @outlook.com</li>
                                    <li>+(506) 6024-9502</li>
                                    <li>San José, Costa Rica</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12 scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/team-single/Robert-Fox"><span className="rolling-text">About Me</span> </Link></li>
                                    <li><Link onClick={ClickHandler} href="/services"><span className="rolling-text">Services</span> </Link></li>
                                    <li><Link onClick={ClickHandler} href="/projects"><span className="rolling-text">Projects</span></Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact"><span className="rolling-text">Contact</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2026 Architect Jonnathan Brenes. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul className="right">
                                <li><Link onClick={ClickHandler} href="/privacy"><span className="rolling-text">privacy & Policy</span> </Link></li>
                                <li><Link onClick={ClickHandler} href="/terms"><span className="rolling-text">Terms</span></Link></li>
                                <li><Link onClick={ClickHandler} href="/team-single/Robert-Fox"><span className="rolling-text">About Me</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;



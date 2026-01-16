import React, { useState } from 'react'
import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu'

/* Homefullviewimage */
import Home1 from '/public/images/home/modern-architecture.jpg'
import Home2 from '/public/images/home/classic-architecture.jpg'
import Home3 from '/public/images/home/modern-architecture-s2.jpg'
import Home4 from '/public/images/home/classic-architecture-dark.jpg'
import Home5 from '/public/images/home/classic-interior-design.jpg'
import Home6 from '/public/images/home/classic-interior-design-s2.jpg'
import Home7 from '/public/images/home/classic-interior-design-dark.jpg'
import Home8 from '/public/images/home/renovation.jpg'
import Home9 from '/public/images/home/modern-woocommerce.jpg'
import Home10 from '/public/images/home/minimal-woocommerce-s2.jpg'
import Home11 from '/public/images/home/urban-planning.jpg'
import Home12 from '/public/images/home/costruction.jpg'
import Home13 from '/public/images/home/costruction-s2.jpg'
import Home14 from '/public/images/home/construction-profile.jpg'
import Home15 from '/public/images/home/frelancer-architect.jpg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }




    return (
        <header id="header">
            <div className={"" + props.hclass} >
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center g-0">
                            <div className={"" + props.col1}>
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className={"" + props.col2}>
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={props.Logo} width={1000} height={200}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className={"" + props.col3}>
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="#">Services</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/Custom-Solutions">Service single</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="#">Team</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/team-single/Robert-Fox">Team single</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                                <li><Link onClick={ClickHandler} href="/privacy">Privacy</Link></li>
                                                <li><Link onClick={ClickHandler} href="/terms">Terms</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/projects">Projects</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/team-single/Robert-Fox">About Me</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"" + props.col4}>
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ${menuActive ? "ti-close" : "flaticon-loupe"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-loupe"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="close-form">
                                        <Link className="theme-btn" onClick={ClickHandler} href="/contact">Contact Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;



import React, { useState } from 'react'
import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu'
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
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={props.Logo} width={1000} height={200}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className={"" + props.col3}>
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/projects">Projects</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/team-single/Brenes-Munoz">About Me</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"" + props.col4}>
                                <div className="header-right">
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



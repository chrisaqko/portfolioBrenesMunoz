import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";


import TopbarS2 from "../TopbarS2/TopbarS2";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header id="header">
      <TopbarS2 />
      <div className={"" + props.hclass}>
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
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="/"
                  >
                    <Image src={props.Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className={"" + props.col3}>
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                  <li>
                      <Link onClick={ClickHandler} href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/projects">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/team-single/Robert-Fox"
                      >
                        About Me
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"" + props.col4}>
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`fi ${
                            menuActive ? "ti-close" : "flaticon-loupe"
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi flaticon-loupe"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="close-form">
                    <Link
                      className="theme-btn"
                      onClick={ClickHandler}
                      href="/contact"
                    >
                      Contact Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

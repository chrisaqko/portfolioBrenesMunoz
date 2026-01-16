import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";



import User from '/public/images/user.svg'
import Heart from '/public/images/heart.svg'
import Card from '/public/images/shopping-cart.svg'



import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const HeaderS2 = (props) => {

   const [cartActive, setcartState] = useState(false);
    const { carts, wishs } = props;
    const [query, setQuery] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);








    

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
                            <div className={"" + props.col3}>
                               <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children image-style-item">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                        </li>
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
                                            <Link onClick={ClickHandler} href="#">Projects</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/projects">Projects</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-single/Modern-House-In-UK">Projects Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/shop-single/Fresh-key-Lime">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} href="/wishlist">Wishlist</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="#">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"" + props.col2}>
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={props.Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className={"" + props.col4}>
                                <div className="header-right">
                                    <div className="header-search-form-s2">
                                        <form onSubmit={handleSubmit}>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search here..."
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                />
                                                <button type="submit">
                                                    <i className="fi flaticon-loupe"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-user-wrapper" ref={menuRef}>
                                        <div className="cart-user-contact">
                                            <button className="user-toggle-btn" onClick={toggleMenu}>
                                                <Image src={User} alt="User" />
                                            </button>
                                            {isOpen && (
                                                <div className="header-user-form header-user-content-toggle">
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="heart-cart">
                                        <Link onClick={ClickHandler} href="/wishlist"><Image src={Heart} alt="" />
                                        <span className="cart-count">{wishs.length}</span>
                                        </Link>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <Image src={Card}
                                                alt="" />{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <Link href="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                    <Link href="/cart" className="view-cart-btn">View Cart</Link>
                                                </div>
                                            </div>
                                        </div>
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
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
        wishs: state.wishList.w_list,
    };
};

export default connect(mapStateToProps, { removeFromCart })(HeaderS2);



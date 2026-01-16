import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
 
    {
        id: 2,
        title: 'Pages',
        link: '#',
        submenu: [
            {
                id: 21,
                title: 'About Us',
                link: '/about'
            },
            {
                id: 22,
                title: 'Services',
                link: '/services'
            },
            {
                id: 23,
                title: 'Service single',
                link: '/service-single/Custom-Solutions'
            },
            {
                id: 24,
                title: 'Team',
                link: '/team'
            },
            {
                id: 25,
                title: 'Team single',
                link: '/team-single/Robert-Fox'
            },
            {
                id: 26,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 27,
                title: 'Login',
                link: '/login'
            },
            {
                id: 28,
                title: 'Contact Us',
                link: '/contact'
            },
            {
                id: 29,
                title: 'privacy',
                link: '/privacy'
            },
            {
                id: 221,
                title: 'Terms',
                link: '/terms'
            },
            {
                id: 222,
                title: '404 Error',
                link: '/404'
            },
        ]
    },

    {
        id: 3,
        title: 'Projects',
        link: '/projects',
    },

  


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
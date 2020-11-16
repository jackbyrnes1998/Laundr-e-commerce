// import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.scss';
import laundrLogo from "../../assets/laundr-assets/laundr-logo.png";
import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "../Sliding-Cart/dist/react-sliding-pane";
import "../Sliding-Cart/dist/react-sliding-pane.css";
import { connect } from 'react-redux';
import About from "../../views/About/About"
import {Route, Switch, Redirect} from 'react-router-dom';
import Cart from "../Cart/Cart"
import {slide as Menu} from 'react-burger-menu'


import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';

const Header = () => {

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });

    const openSidebar = () => {
        // document.getElementById("sidebar").sidebar('toggle')

        document.querySelector("#sidebar").sidebar('toggle')
    }
    return (
        <div className="navbar navbar-expand-lg navbar-light header sticky-top">
            <div className='topnav'>
                <Link id="logo-link" to="/">
                    <img className="topnav-logo" src={ laundrLogo } alt="Laundr logo" />
                </Link>
            </div>
            <div className="topnav-right collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="topnav-link nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="topnav-link nav-link" to='/About' onClick={<Redirect to="/About" />}>Our Story</Link> */}
                        <Link className="topnav-link nav-link" to='/About'>Our Story</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/Cart" className="topnav-link nav-link">
                            Cart
                        </Link> */}
                        <button onClick={openSidebar}>
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <Cart className="slide-pane" isOpen={state.isPaneOpen}/> */}
                
            {/* <SlidingPane
                className="shopping-cart-pane"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isPaneOpen}
                title="Your Cart"
                subtitle="You're just a few clicks away from fresher loads!"
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setState({ isPaneOpen: false });
                }}
            ></SlidingPane> */}

            <div id="sidebar" className="ui red vertical right sidebar menu">
                <a class="item">
                    <i class="home icon"></i>
                    Home
                </a>
                <a class="active item">
                    <i class="heart icon"></i>
                    Current Section
                </a>
                <a class="item">
                    <i class="facebook icon"></i>
                    Like us on Facebook
                </a>
                <div class="item">
                    <b>More</b>
                    <div class="menu">
                    <a class="item">About</a>
                    <a class="item">Contact Us</a>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Header;

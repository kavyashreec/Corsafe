import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import * as RB from 'react-bootstrap';
import logo from './assets/img/Logo.png';


function Navbar() {
  return (
    <div>
          <RB.Navbar className="navbartot" fixed ="top" collapseOnSelect expand="lg" bg="" variant="dark">
            <RB.Navbar.Brand className="navbrand" href="/">
            <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          <span className="navbrand">CORSAFE</span>
        </RB.Navbar.Brand>
        <RB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RB.Navbar.Collapse id="responsive-navbar-nav">
          <RB.Nav className="ml-auto navcont">
            <RB.Nav.Link href="/tracker">Tracker</RB.Nav.Link>
            <RB.Nav.Link href="/news">News</RB.Nav.Link>
          </RB.Nav>
        </RB.Navbar.Collapse>
      </RB.Navbar>
    </div>
  );
}

export default Navbar;

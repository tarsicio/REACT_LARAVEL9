/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Navigationbar
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Footer/style.css';
import { LOGO_HORUS } from '../../config/imgs/imgs';
//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HOME, LOGIN, LOGOUT, REGISTER, DASHBOARD } from '../../config/rutas/rutas';
import { UseData } from '../../store/UserLogin';

function Navigationbar() {
  const _token = UseData(state => state._token);
  return (
    <div>     
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-0" style={{padding:0}}>
          <Container fluid>
            <NavLink className="navbar-brand" to={HOME} style={{background: "white"}}>
              <Image src={LOGO_HORUS.LogoHorus} style={{width: 30, height: 30}} alt="Logo_Horus" roundedCircle />              
            </NavLink>
              <NavLink className="nav-link" to={HOME} style={{color: "black"}}>
                Home
              </NavLink>
              { _token &&
              <NavLink className="nav-link" to={DASHBOARD} style={{color: "black"}}>
                Dashboard
              </NavLink>
            }
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <NavLink className="navbar-brand" to={HOME} style={{background: "white"}}>
                    <Image src={LOGO_HORUS.LogoHorus} style={{width: 30, height: 30,}} alt="Logo_Post"  className="img-fluid" />              
                  </NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{background: "white"}}>
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  { !_token && <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={LOGIN} style={{color: "black"}}>
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={REGISTER} style={{color: "black"}}>
                      Register
                    </NavLink>
                  </li>
                </ul> }
                { _token && <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={LOGOUT} style={{color: "black"}}>
                      Logout
                    </NavLink>
                  </li>
                </ul> }  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Navigationbar;
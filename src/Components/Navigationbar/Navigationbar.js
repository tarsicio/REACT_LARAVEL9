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
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { Link } from 'react-router-dom';
import { HOME, LOGIN, LOGOUT, REGISTER, DASHBOARD } from '../../config/routers/routes/route';
import { UseData } from '../../store/UserLogin';

function Navigationbar() {
  const _token = UseData(state => state._token);
  return (
    <>     
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-0" style={{padding:0}}>
          <Container fluid>
            <Link className="navbar-brand" to={HOME} style={{background: "white"}}>
              <Image src={LOGO_HORUS.LogoHorus} style={{width: 30, height: 30}} alt="Logo_Horus" roundedCircle />              
            </Link>
              <Link className="nav-link" to={HOME} style={{color: "black"}}>
                Home
              </Link>
              { _token &&
              <Link className="nav-link" to={DASHBOARD} style={{color: "black"}}>
                Dashboard
              </Link>
            }
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link className="navbar-brand" to={HOME} style={{background: "white"}}>
                    <Image src={LOGO_HORUS.LogoHorus} style={{width: 30, height: 30,}} alt="Logo_Post"  className="img-fluid" />              
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{background: "white"}}>
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  { !_token && <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={LOGIN} style={{color: "black"}}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={REGISTER} style={{color: "black"}}>
                      Register
                    </Link>
                  </li>
                </ul> }
                { _token && <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={LOGOUT} style={{color: "black"}}>
                      Logout
                    </Link>
                  </li>
                </ul> }  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigationbar;
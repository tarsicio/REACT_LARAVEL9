import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Footer/style.css';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HOME, LOGIN, REGISTER, DASHBOARD } from '../../config/routers/routes/route';
import Home from '../../views/Home/Home';
import Login from '../../views/Login/Login';
import Register from '../../views/Register/Register';
import Dashboard from '../../views/Dashboard/Dashboard';

function Navigationbar() {
  return (
    <>
    <Router> 
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-0 color_navbar" style={{padding:0}}>
          <Container fluid>
            <Link className="navbar-brand" to={HOME} style={{background: "white"}}>
              <img src={LOGO_HORUS.LogoHorus} style={{width: 30, height: 30, borderRadius: "100%"}} alt="Logo_Post"  className="img-fluid" />              
              </Link>
              <Link className="nav-link" to={HOME} style={{color: "white"}}>
                Home
              </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link className="navbar-brand" to={HOME}>
                    <img src={LOGO_HORUS.LogoHorus} style={{width: 30, height: 30,}} alt="Logo_Post"  className="img-fluid" />              
                </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={LOGIN} style={{color: "white"}}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={REGISTER} style={{color: "white"}}>
                      Register
                    </Link>
                  </li>
                </ul>
                </Nav>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        <div>
          <div>
            <Routes>
              <Route exact path={HOME} element={<Home />} />
              <Route path={LOGIN} element={<Login />} />
              <Route path={REGISTER} element={<Register />} />
              <Route path={DASHBOARD} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router> 
    </>
  );
}

export default Navigationbar;
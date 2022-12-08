import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoHorus from '../../assets/img/horus.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../../Pages/Dashboard/Dashboard';

function Navigationbar() {
  return (
    <>
    <Router>
    <Navbar>
      <Container>
        <Link className="navbar-brand" to={'/'}>
          <img src={LogoHorus} style={{width: 30, height: 30,}} alt="Logo_Post"  className="img-fluid" />              
        </Link>
        <Navbar.Brand>HORUS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={'/login'}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/register'}>
                Register
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
    </Router>
    </>
  );
}

export default Navigationbar;
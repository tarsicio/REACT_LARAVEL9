import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogoHorus from '../../assets/img/horus.png';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../../Pages/Dashboard/Dashboard';

function Navmenu(){
  return (   
  <Router>   
        <div className="Navmenu">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/'}>
              <img src={LogoHorus} style={{width: 30, height: 30,}} alt="Logo_Post"  className="img-fluid" />              
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
              </div>
            </div>
          </nav>
        </div>        
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
    )
}
export default Navmenu;
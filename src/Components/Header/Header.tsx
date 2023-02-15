/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Navigationbar
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Footer/style.css';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { NavLink } from 'react-router-dom';
import { HOME, LOGIN, LOGOUT, REGISTER, DASHBOARD } from '../../config/rutas/rutas';
import { UseData } from '../../store/UserLogin';
import Carrusel from './Carrusel';
import '../Footer/background.css';
import Flag from "react-flags";
import { useTranslation } from 'react-i18next';
import { ImExit } from "react-icons/im";
import { FaLockOpen } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";

function Header() {
  const  { t, i18n } = useTranslation();
  const _token = UseData(state => state._token);  
  const _lng = UseData(state => state.setLng);
  const Lng = UseData(state => state._lng);  
  const [language, setLanguage] = useState(Lng);

  const changeLanguage = lng => {        
    if (language === "en") {
      i18n.changeLanguage('es');
      setLanguage('es');
      _lng('es');      
    } else {
      i18n.changeLanguage('en');
      setLanguage('en');
      _lng('en');      
    }
  };

  useEffect(() => {
    if(Lng === 'en'){
      i18n.changeLanguage('en');
      setLanguage('en');
    }else{
      i18n.changeLanguage('es');
      setLanguage('es');
    }
  }, []);

  return (
    <header className="fondo">         
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-0 fondo" style={{padding:"10px"}}>
          <Container fluid>
            <NavLink className="navbar-brand rounded-circle" to={HOME} style={{background: "white"}}>
              <Image src={LOGO_HORUS.LogoHorus} style={{width: 50, height: 50}} alt="Logo_Horus" />
            </NavLink>
              <NavLink className="nav-link" to={HOME} style={{color: "white", padding:"10px" }}>
                {t('header.home')}
              </NavLink>
              { _token &&
              <NavLink className="nav-link" to={DASHBOARD} style={{color: "white", padding:"10px"}}>
                {t('header.dashboard')}
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
                
                <Nav className="justify-content-end flex-grow-1 pe-3 fondo">
                <div>
                  <Button 
                    className="fondo" 
                    style={{color: "white", border:"black"}} 
                    onClick={() => changeLanguage(language)}>
                    {language === "en" ? t('header.language') : t('header.language') }
                    {language === "en" 
                    ? <Flag name="US" basePath="./img/flags" format="png" pngSize={32} shiny={true} alt="English" /> 
                    : <Flag name="VE" basePath="./img/flags" format="png" pngSize={32} shiny={true} alt="Spanish" /> }
                  </Button>                  
                </div>
                  { !_token && <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={LOGIN} style={{color: "white", padding:"10px"}}>
                      {t('header.login')} <FaLockOpen />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={REGISTER} style={{color: "white", padding:"10px"}}>
                      {t('header.register')} <GiArchiveRegister />
                    </NavLink>
                  </li>
                </ul> }
                { _token && <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={LOGOUT} style={{color: "white", padding:"10px"}}>
                      {t('header.logout')} <ImExit />
                    </NavLink>                                                              
                  </li>
                </ul> }  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      { !_token && <Carrusel /> }
    </header>
  );
}

export default Header;
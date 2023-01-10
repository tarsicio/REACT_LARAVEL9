/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Footer
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import { GoMarkGithub as CopyRight, GoMail as Gmail } from "react-icons/go";
import './style.css';


function Footer(){
  
  return (
    <footer className="footer">
        <div className="contact">
            <div className="item__contact">                
            </div>
            <div className="item__contact">
                <i className='bx bx-copyright contact__icon'></i>
                <CopyRight />
                <h3 className="contact__title">
                    <a href="https://github.com/tarsicio" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "white"}}>
                        github.com/tarsicio
                    </a>
                </h3>
            </div>
            <div className="item__contact" id="contacto">
                <Gmail />                                
                <h3 className="contact__title">
                    <a href="mailto:telecom.com.ve@gmail.com" style={{textDecoration: "none", color: "white"}}>
                        telecom.com.ve@gmail.com
                    </a>
                </h3>
            </div>
            <div className="item__contact">                
            </div>            
        </div>
    </footer>
  );
}
export default Footer;
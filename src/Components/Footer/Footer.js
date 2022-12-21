import React from 'react';
//import { CiBatteryFull } from "react-icons/ci";
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
                    <a href="https://github.com/tarsicio" target="_blank" style={{textDecoration: "none", color: "white"}}>
                        github.com/tarsicio
                    </a>
                </h3>
            </div>
            <div className="item__contact" id="contacto">
                <Gmail />                
                <h3 className="contact__title">telecom.com.ve@gmail.com</h3>
            </div>
            <div className="item__contact">                
            </div>            
        </div>
    </footer>
  );
}
export default Footer;
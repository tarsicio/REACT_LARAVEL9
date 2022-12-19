import React from 'react';
import './style.css';


function Footer(){
  
  return (
    <footer className="footer">
        <div className="contact">
            <div className="item__contact">                
            </div>
            <div className="item__contact">
                <i className='bx bx-copyright contact__icon' ></i>
                <h3 className="contact__title">Tarsicio Carrizales API_REST Design</h3>
            </div>
            <div className="item__contact" id="contacto">
                <i className='bx bx-mail-send contact__icon' > Contacto</i>
                <h3 className="contact__title">telecom.com.ve@gmail.com</h3>
            </div>
            <div className="item__contact">                
            </div>            
        </div>
    </footer>
  );
}
export default Footer;
/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Navigationbar
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { LOGO_REACT, LOGO_LARAVEL, LOGO_TARSICIO_REMOTE } from '../../config/imgs/imgs';

function Carrusel(){
  return(
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LOGO_REACT.LogoReact}
            alt="Logo_React"
            style={{height:"400px"}}
          />
          <Carousel.Caption>
            <h3>Frontend React HORUS | 2023</h3>
            <p>Conéctate a tu API-REST Laravel 9, tu mejor Opción.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LOGO_LARAVEL.LogoLaravel}
            alt="Logo_Laravel"
            style={{height:"400px"}}
          />
          <Carousel.Caption>
            <h3>Backend Laravel 9, HORUS | 2023</h3>
            <p>Conéctate a tu API-REST Laravel 9, tu mejor Opción.</p>
          </Carousel.Caption>          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LOGO_TARSICIO_REMOTE.LogoTarsicioRemote}
            alt="Logo_Laravel"
            style={{height:"400px"}}
          />
          <Carousel.Caption>
            <h3>Proyecto HORUS | 2023, Versión 3</h3>
            <p>Te llevo a tú próximo nivel.</p>
          </Carousel.Caption>          
        </Carousel.Item>
      </Carousel>
    )
}

export default Carrusel
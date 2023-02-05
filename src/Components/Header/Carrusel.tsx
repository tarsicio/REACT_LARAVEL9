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
import { useTranslation } from 'react-i18next';

function Carrusel(){
  const  { t, i18n } = useTranslation();
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
            <h3>{t('carusel01.title')}</h3>
            <p>{t('carusel01.msg')}</p>
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
            <h3>{t('carusel02.title')}</h3>
            <p>{t('carusel02.msg')}</p>            
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
            <h3>{t('carusel03.title')}</h3>
            <p>{t('carusel03.msg')}</p>            
          </Carousel.Caption>          
        </Carousel.Item>
      </Carousel>
    )
}

export default Carrusel
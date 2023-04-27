/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Navigationbar
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';
import { LOGO_REACT, LOGO_LARAVEL, LOGO_TARSICIO_REMOTE, LOGO_USDT } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';

function Carrusel(){
  const  { t, i18n } = useTranslation();
  return(
      <Carousel className="ancho" variant="dark">
        <Carousel.Item style={{ textAlign:"center"}} >
          <Image 
            className="d-block w-100" 
            style={{ height:"400px"}} 
            src={LOGO_USDT.LogoUSDT} 
            alt="USDT" />
          <Carousel.Caption>
            <h3>{t('carusel04.title')}</h3>
            <p>{t('carusel04.msg')}</p>
            <p>telecom.com.ve@gmail.com <span style={{ color:"yellow" }}><b>BINANCE</b></span></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
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
          <Image
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
          <Image
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
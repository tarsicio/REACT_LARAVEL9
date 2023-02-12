/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Home
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import Reloj from '../../components/utils/reloj/Reloj';
import Image from "react-bootstrap/Image";
import { 
	LOGO_WORKER, 
	REACT_LOADING, 
	LOGO_VITE, 
	LOGO_TS } from '../../config/imgs/imgs';
import './style.css';
import { useTranslation } from 'react-i18next';

function Home(){
	const  { t, i18n } = useTranslation();
	return(
		<section>			
			<Reloj />
			<div style={{textAlign:"center"}}>
				 <Image className="rotando" src={LOGO_VITE.LogoVite} alt="Vite" /> {t('home.and')} 
				 <Image className="App-logo rotando" src={REACT_LOADING.ReactLoading} alt="React" /> {t('home.and')}
				 <Image className="rotando" src={LOGO_TS.LogoTs} alt="React" /> 
			</div>			
			<div className="container hero__main" > 				
	            <div className="hero__textos">
	                <h1 className="title">{t('home.title')}</h1>
	                <h2><span className="title--active">{t('home.subtitle01')}</span></h2> 
	                <p className="copy">{t('home.subtitle02')} <span className="copy__active">{t('home.subtitle03')}</span></p>
	                <a href="mailto:telecom.com.ve@gmail.com" className="cta">telecom.com.ve@gmail.com</a>
	                <p className="copy">{t('home.msg01')}<span className="copy__active">{t('home.msg02')}</span>), 
	                {t('home.msg03')}</p>
	            </div>                            
	            <Image src={LOGO_WORKER.LogoWorker} alt="Logo_Worker" className="mockup" /> 
        	</div>	
		</section>
	)
}

export default Home;
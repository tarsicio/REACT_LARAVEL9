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
import { LOGO_WORKER, REACT_LOADING, LOGO_VITE } from '../../config/imgs/imgs';

function Home(){	
	return(
		<section>			
			<Reloj />
			<div style={{textAlign:'center'}}>
				 <img src={LOGO_VITE.LogoVite} alt="Vite" /> AND <img className="App-logo" style={{height:"40px", width:"40px"}} src={REACT_LOADING.ReactLoading} alt="React" />
			</div>						
			<div className="container hero__main"> 				
	            <div className="hero__textos">
	                <h1 className="title">Prueba Nuestro</h1>
	                <h2><span className="title--active">FrontEnd React HORUS Versión 3.0.0</span></h2> 
	                <p className="copy">Nos encargamos de llevar tu idea al <span className="copy__active">siguiente nivel</span></p>
	                <a href="mailto:telecom.com.ve@gmail.com" className="cta">telecom.com.ve@gmail.com</a>
	                <p className="copy">Manejo de Usuarios(Autenticación por Token, <span className="copy__active">Sanctum</span>), 
	                Roles, Permisos, Notificaciones, Módulos y mucho más. 100% Funcional.</p>
	            </div>                            
	            <img src={LOGO_WORKER.LogoWorker} alt="Logo_Worker" className="mockup" /> 
        	</div>	
		</section>
	)
}

export default Home;
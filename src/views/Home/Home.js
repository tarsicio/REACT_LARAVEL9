import React from 'react';
import { LOGO_HORUS, LOGO_WORKER } from '../../config/routers/imgs/img';
import '../../components/Footer/style.css';

function Home(){
	return(
		<>
			<div className="container hero__main">  
	            <div className="hero__textos">
	                <h1 className="title">Prueba nuestro <span className="title--active">FrontEnd React HORUS 3</span></h1> 
	                <p className="copy">Nos encargamos de llevar tu idea al <span className="copy__active">siguiente nivel</span></p>
	                <a href="#" className="cta">telecom.com.ve@gmail.com</a>
	                <p className="copy">Manejo de Usuarios(Autenticación por Token, <span className="copy__active">Sanctum</span>), 
	                Roles, Permisos, Notificaciones, Módulos y mucho más. 100% Funcional.</p>
	            </div>                            
	            <img src={LOGO_WORKER.LogoWorker} alt="Logo_Worker" className="mockup" /> 
        	</div>	
		</>
	)
}

export default Home;
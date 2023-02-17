/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Logout
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 * El presente componente permite cerrar el la sección del usuario
 * forma global con  la libreria Zustand, la cual
 * puede ser usada desde cualquier parte de la aplicación sin problema
 * también los datos se guardan en el LocalStorage, una vez haga Logout
 * se borran todos los datos globales y el LocalStorage, también cierra
 * el sección en la API de Laravel 9
 */

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { UseData } from '../../store/UserLogin';
import { LOGOUT, HOME, URL_BASE } from '../../config/rutas/rutas';	
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import ButtonLoading from '../../components/Loading/ButtonLoading';
import { Navigate } from 'react-router-dom';

function Exit(){
	const  { t, i18n } = useTranslation();
	const userData = UseData(state => state._user);
	const userLogout = UseData(state => state.logoutUser);	
	const endpoint = URL_BASE + LOGOUT;
	const [errorLogout, setErrorLogout] = useState(false);
	const [isLoading, setIsLoading] = useState (false);
	const [servidorAPI, setServidorAPI] = useState(false);		

	const handleLogout = async (e) => {
		e.preventDefault();
		setErrorLogout(false);
		setServidorAPI(false);
		setIsLoading(true);
		//hacer logout en la API-REST de LARAVEL
		try{			
			const logout = await axios.post(endpoint, {
	         email: userData.email           
		    });		    
	        if(logout.status === 201){
	        	//Limpia el Estado Global de la aplicación para Token y Objeto Usuario
				userLogout();
				//Borra el localStore del Navegador WEB
				localStorage.removeItem('DatosHorusUsersToken2023');
				setIsLoading(false);
				<Navigate to={HOME} />	        	
			}else{
				setIsLoading(false);
				setErrorLogout(true);
			}
		}catch(error){
			if(error.code === "ERR_NETWORK"){
				setServidorAPI(true);          
			  }     
			}finally{
				setIsLoading(false);
				setErrorLogout(true);
			}		
  	}
	return(				    
		<div className="auth-wrapper container hero__main">
			<div className="auth-inner">
				<center>
					<h1>{t('logout.title')}</h1>
					<div>
						<h3>{t('horus.title')}</h3>
					</div>
					<div style={{textAlign: "center"}}>
					    <img 
					        src={ LOGO_HORUS.LogoHorus } 
					        style={{width: 100, height: 100,}} 
					        alt="Logo_Horus"  
					        className="img-fluid" />
					</div>
						<div>
							{errorLogout ? <div style={{color:"red", textAlign:"center"}}>{t('logout.error.connection')}</div> : <div></div>}
							{servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{t('error.server.api')}</div> : <div></div>}
						</div>
						{isLoading ? 
							<ButtonLoading msg={t('logout.exit.wait')} /> :
							<div className="d-grid">
								<Button onClick={ handleLogout } className="btn btn-primary" type="submit" disabled={isLoading}>
									{t('logout.button')}
								</Button>
							</div> }							
				</center>	
			</div>						
		</div>			
	)
}

export default Exit;
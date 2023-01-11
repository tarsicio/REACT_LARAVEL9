/**
 * El presente componente permite cerrar el la sección del usuario
 * forma global con  la libreria Zustand, la cual
 * puede ser usada desde cualquier parte de la aplicación sin problema
 * también los datos se guardan en el LocalStorage, una vez haga Logout
 * se borran todos los datos globales y el LocalStorage, también cierra
 * el sección en la API de Laravel 9
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Logout
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 */

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { UseData } from '../../store/UserLogin';
import '../../components/Footer/style.css';
import { LOGOUT, HOME, URL_BASE } from '../../config/routers/routes/route';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR_CONEXION, LOGOUT_WAIT, ERROR_SERVER_API } from '../../consts/msgLogin/MsgLogin';
import Loading from '../../components/Loading/Loading';

function Logout(){
	const userData = UseData(state => state._user);
	const userLogout = UseData(state => state.logoutUser);	
	const navigate = useNavigate();
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
	        	navigate(HOME);
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
		<>		
			<div className="auth-wrapper container hero__main">
				<div className="auth-inner">
					<center>
						<h1>LOGOUT</h1>
						<div>
							<h3>SISTEMA HORUS</h3>
						</div>
						<div style={{textAlign: "center"}}>
		          			<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
		        		</div>
						<div>
							{errorLogout ? <div style={{color:"red", textAlign:"center"}}>{ ERROR_CONEXION }.</div> : <div></div>}
							{servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{ERROR_SERVER_API}</div> : <div></div>}
						</div>		        				        			
		        		<Button onClick={ handleLogout } variant="primary" type="submit" disabled={isLoading}>
						    Logout
						</Button>		        			
		        		<div>
		        			{isLoading ? <Loading msg={LOGOUT_WAIT} /> : <div></div>}
		        		</div>		        		
					</center>	
				</div>						
			</div>			
		</>
	)
}

export default Logout;
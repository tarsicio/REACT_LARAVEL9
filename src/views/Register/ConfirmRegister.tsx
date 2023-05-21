
/**
 * Pantalla para recuperar la clave del usuario
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Login
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 */

import React, { useState } from 'react';
import { userData } from '../../store/StoreDataUser';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { URL_BASE, DASHBOARD } from '../../config/rutas/rutas';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import ButtonLoading from '../../components/Loading/ButtonLoading';
import { useTranslation } from 'react-i18next';

function ConfirmRegister(){
	
  const  { t, i18n } = useTranslation();
	const location = useLocation();
	const currentUrl = location.pathname;	
  const endpoint = URL_BASE + currentUrl;
	//Cargando Loading
	const [isLoading, setIsLoading] = useState (false);
	//redireccionar la página
	const navigate = useNavigate();
	const _token = userData(state => state.setToken);
  const _user = userData(state => state.setUser);
  const [servidorAPI, setServidorAPI] = useState(false);
  const [errorValidacion,setErrorValidacion] =useState(false);		
	//Acceso al Context Global, para gusradar Los datos del Usuario y Token. 			
	
	const register = async (e) => {
		e.preventDefault();
		try{
			setIsLoading(true);
			setErrorValidacion(false);
			setServidorAPI(false);
			const datos = await axios.post(endpoint);
      const status = datos.status;        
      if(status === 201){ 
      	console.log(datos);      	
        _token(datos.data.access_token);          
        _user(datos.data.user);                   
         navigate(DASHBOARD);          
      }else{          
        setServidorAPI(true);
      }		  
		}catch(error){			     
	    if(error.code === "ERR_NETWORK"){
	      setServidorAPI(true);
	    }else if(error.code === "ERR_BAD_REQUEST") {
	    	setErrorValidacion(true);
        setIsLoading(false);
      }else{
      	//NADA
      }
	  }finally{
	        setIsLoading(false);        
	  }
	}

	return(
		<section>
        <div className="auth-wrapper">
          <div className="auth-inner">      
            <h1 style={{textAlign: "center"}}>{t('confirm.title')}</h1>              
              <div style={{textAlign: "center"}}>
                <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
              </div>
              {errorValidacion ? <div style={{color:"red", textAlign:"center"}}>{t('confirm.error.msg')}</div> : <div></div>}
              {servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{t('error.server.api')}</div> : <div></div>}
              {isLoading ? 
                <ButtonLoading msg={t('register.wait')} /> :
                <div className="d-grid">
                  <Button onClick={register} type="submit" className="btn btn-primary" disabled={isLoading} >
                    {t('confirm.button')}
                  </Button> 
                </div>}
          </div>
        </div>
      </section>
	)
}

export default ConfirmRegister;
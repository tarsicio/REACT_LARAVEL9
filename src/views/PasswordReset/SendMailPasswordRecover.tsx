
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
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ButtonLoading from '../../components/Loading/ButtonLoading';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  URL_BASE, 
  LOGIN,
  REGISTER,
  SEND_MAIL	 } from '../../config/rutas/rutas';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';

function SendMailPasswordRecover(){

	const  { t, i18n } = useTranslation();
	let valido = true;
  const endpoint = URL_BASE + SEND_MAIL;  
  // Validaciones form  
	const [invalidMailInput,setInvalidMailInput] = useState(false);
	const [mailSend, setMailSend] = useState(false);
	const [mailError, setMailError] = useState(false);
	const [msgMailError, setMsgMailError] = useState('');
	//Campos del form
	const [email, setEmail] = useState(''); 
	const [servidorAPI, setServidorAPI] = useState(false);
	const [estado, setEstado] = useState(false);
	//Cargando Loading
	const [isLoading, setIsLoading] = useState (false);
	//Acceso al Context Global, para gusradar Los datos del Usuario y Token. 

	const handleMailChange = (e) => {
	    setEmail(e.target.value);
	    setInvalidMailInput(false);
	    setEstado(false);
	    setServidorAPI(false);
	    setMailSend(false);
	    setMailError(false);
	  }

	const reset = async (e) => {      
	    e.preventDefault(); 
	    setEstado(false);
	    setServidorAPI(false);
	    setMailSend(false);
	    setMailError(false);     
	    valido = true;
	    if(email === ''){            
	      setInvalidMailInput(true);
	      valido = false;
	    }       
	    if(valido){
	      setIsLoading(true);
	      try{        
	        const datos = await axios.post(endpoint, {
	          email: email
	        });
	        const status = datos.status;
	        console.log(datos);
	        if(status === 200){	        	
	        	setMailSend(true);
	          setEstado(false);
	          setIsLoading(false);	          	
	        }else{          
	          setEstado(true);
	          setIsLoading(false);	          
	        }
	      }catch(error){
	        if(error.code === "ERR_NETWORK"){
	          setServidorAPI(true);
	        }else if(error.code === "ERR_BAD_REQUEST") {	        	
	        	setMsgMailError(error.response.data.errors.email);
	          setEstado(true);
	          setMailError(true);	          	
	        }     
	      }finally{
	        setIsLoading(false);        
	      }
	    }else{
	      setIsLoading(false);
	    }
  	}

	return(
		<section>
        <div className="auth-wrapper">
          <div className="auth-inner">      
            <Form onSubmit={reset}>
            <h3>{t('send.email.title')}</h3><div></div>            	
                <div style={{textAlign: "center"}}>
                  <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
                </div>                
                <div>
                  { estado ? <div style={{color:"red", textAlign:"center"}}>{t('error.datos')}</div> : <div></div> }
                  { servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{t('error.server.api')}</div> : <div></div> }
                  { mailSend ? <div style={{color:"green", textAlign:"center"}}>{t('send.email.recovery')}</div> : <div></div> }
                  { mailError ? <div style={{color:"red", textAlign:"center"}}>{msgMailError}</div> : <div></div> }
                </div>            
              <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingMail"
                  label={t('login.label.email')}
                  className="mb-3"
                >
                <Form.Control 
                  type="email" 
                  name="email"
                  value={email} 
                  onChange={ handleMailChange }
                  placeholder={t('login.label.email')}
                  disabled={isLoading} 
                  autoComplete="on"/>                  
                  </FloatingLabel>
                  {invalidMailInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('login.error.email')}</Form.Label> : ''}               
              </Form.Group>
              {isLoading ? <ButtonLoading msg={t('login.validate.wait')} /> :
              <div className="d-grid" style={{textAlign:"center"}}>
	              <Button variant="primary" type="submit" disabled={isLoading}>
	                {t('send.button.recovery')}
	              </Button>
              </div> }
              <p className="forgot-password text-right">
                <Link className="nav-link" to={LOGIN} style={{color: "blue"}}>
                  {t('register.ready')}
                </Link>                 
              </p>
              <p className="forgot-password text-right">
                <Link className="nav-link" to={REGISTER} style={{color: "blue"}}>
                  {t('login.msg.register')}
                </Link>                 
              </p>
            </Form>
          </div>
        </div>
      </section>
	)
}

export default SendMailPasswordRecover;
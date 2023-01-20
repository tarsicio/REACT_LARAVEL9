
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
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  URL_BASE, 
  LOGIN,
  REGISTER,
  RESET_PASSWORD } from '../../config/rutas/rutas';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import {
  ERROR_EMAIL,  
  ERROR_DATOS,
  ERROR_SERVER_API,
  LABEL_EMAIL, 
  BNT_RESET_PASS,
  VALIDATE_WAIT,
  LABEL_REGISTER,
  LABEL_YA_LOGIN,
  RETURN_PASSWORD,
  SEND_MAIL_RECOVERY
} from '../../config/label/label';

function SendMailPasswordRecover(){

	let valido = true;
  const endpoint = URL_BASE + RESET_PASSWORD;
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
	      	console.log(error);       
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
            <h3>{RETURN_PASSWORD}</h3><div></div>
            	<div style={{padding:"20px"}}> 
                  {isLoading ? <Loading msg={VALIDATE_WAIT} /> : <div></div>}
                </div>
                <div style={{textAlign: "center"}}>
                  <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
                </div>                
                <div>
                  { estado ? <div style={{color:"red", textAlign:"center"}}>{ERROR_DATOS}</div> : <div></div> }
                  { servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{ERROR_SERVER_API}</div> : <div></div> }
                  { mailSend ? <div style={{color:"green", textAlign:"center"}}>{SEND_MAIL_RECOVERY}</div> : <div></div> }
                  { mailError ? <div style={{color:"red", textAlign:"center"}}>{msgMailError}</div> : <div></div> }
                </div>            
              <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingMail"
                  label={LABEL_EMAIL}
                  className="mb-3"
                >
                <Form.Control 
                  type="email" 
                  name="email"
                  value={email} 
                  onChange={ handleMailChange }
                  placeholder="Enter email" 
                  disabled={isLoading} 
                  autoComplete="on"/>
                  </FloatingLabel>
                  {invalidMailInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{ERROR_EMAIL}</Form.Label> : ''}                
              </Form.Group>
              <div style={{textAlign:"center"}}>
	              <Button variant="primary" type="submit" disabled={isLoading}>
	                {BNT_RESET_PASS}
	              </Button>
              </div>
              <p className="forgot-password text-right">
                <Link className="nav-link" to={LOGIN} style={{color: "blue"}}>
                  {LABEL_YA_LOGIN}
                </Link>                 
              </p>
              <p className="forgot-password text-right">
                <Link className="nav-link" to={REGISTER} style={{color: "blue"}}>
                  {LABEL_REGISTER}
                </Link>                 
              </p>
            </Form>
          </div>
        </div>
      </section>
	)
}

export default SendMailPasswordRecover;
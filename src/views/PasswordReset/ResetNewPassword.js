
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
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { URL_BASE, LOGIN } from '../../config/rutas/rutas';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import Loading from '../../components/Loading/Loading';
import { 
  ERROR_SERVER_API,
  ERROR_DATOS,
  LABEL_PASSWORD,
  LABEL_PASSWORD2,
  VALIDATE_WAIT,
  BNT_RESET_PASS,
  ERROR_PASSWORD,
  ERROR_IGUALES } from '../../config/label/label';

function ResetNewPassword(){
	
	const location = useLocation();
	const currentUrl = location.pathname;	
  const endpoint = URL_BASE + currentUrl;
  let valido = true;
	//Cargando Loading
	const [isLoading, setIsLoading] = useState (false);
	//redireccionar la página
	const navigate = useNavigate();
  const [servidorAPI, setServidorAPI] = useState(false);
  const [password,setPassword] = useState('');
  const [password2,setPassword2] = useState('');
  const [vacio, setVacio] = useState(false);
  const [diferentes, setDiferentes] = useState(false);
  const [estado,setEstado] = useState(false);
	//Acceso al Context Global, para gusradar Los datos del Usuario y Token. 			
	
  const handlePasswordChange = (e) => {
      setPassword(e.target.value);      
      setEstado(false);
      setServidorAPI(false);
      setDiferentes(false);
      setVacio(false);
    }

    const handlePassword2Change = (e) => {
      setPassword2(e.target.value);      
      setEstado(false);
      setServidorAPI(false);
      setDiferentes(false);
      setVacio(false);
    }

	const reset = async (e) => {
		e.preventDefault();
    if(password !== password2){
      setDiferentes(true);        
      valido = false;
    }
    if(password === '' || password2 === ''){
      setVacio(true);
      valido = false;
    }
    if(valido){
      setIsLoading(true);
  		try{
  			setIsLoading(true);			
  			setServidorAPI(false);
  			const datos = await axios.post(endpoint,{
          password: password
        });
        const status = datos.status;
        console.log(datos);        
        if(status === 201){ 
        	console.log(datos);      	
          navigate(LOGIN);          
        }else{          
          setServidorAPI(true);
        }		  
  		}catch(error){
        console.log(error);
  	    if(error.code === "ERR_NETWORK"){
  	      setServidorAPI(true);
          setIsLoading(false);
  	    }else if(error.code === "ERR_BAD_REQUEST") {
          setIsLoading(false);
        }else{
        	//NADA
        }
  	  }finally{
  	        setIsLoading(false);        
  	  }//finally
    }
	}

	return(
		<section>
        <div className="auth-wrapper">
          <div className="auth-inner">      
            <Form onSubmit={reset}>
            <h3>NUEVA CLAVE</h3><div></div>
              <div style={{padding:"20px"}}> 
                  {isLoading ? <Loading msg={VALIDATE_WAIT} /> : <div></div>}
                </div>
                <div style={{textAlign: "center"}}>
                  <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
                </div>                
                <div>
                  { estado ? <div style={{color:"red", textAlign:"center"}}>{ERROR_DATOS}</div> : <div></div> }
                  { servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{ERROR_SERVER_API}</div> : <div></div> }                  
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingPassword"
                  label={LABEL_PASSWORD}
                  className="mb-3"
                >
                <Form.Control 
                  type="password" 
                  name="password"
                  value={password} 
                  onChange={ handlePasswordChange }
                  placeholder="Enter Password" 
                  disabled={isLoading} 
                  autoComplete="on"/>
                  </FloatingLabel>
                  { vacio ? <div style={{color:"red", textAlign:"center"}}>{ERROR_PASSWORD}</div> : <div></div> }
                  { diferentes ? <div style={{color:"red", textAlign:"center"}}>{ERROR_IGUALES}</div> : <div></div> }
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingPassword2"
                  label={LABEL_PASSWORD2}
                  className="mb-3"
                >
                <Form.Control 
                  type="password" 
                  name="password2"
                  value={password2} 
                  onChange={ handlePassword2Change }
                  placeholder="Enter Password Again" 
                  disabled={isLoading} 
                  autoComplete="on"/>
                  </FloatingLabel> 
                  { vacio ? <div style={{color:"red", textAlign:"center"}}>{ERROR_PASSWORD}</div> : <div></div> }
                  { diferentes ? <div style={{color:"red", textAlign:"center"}}>{ERROR_IGUALES}</div> : <div></div> }                 
              </Form.Group>
              <div style={{textAlign:"center"}}>
                <Button variant="primary" type="submit" disabled={isLoading}>
                  {BNT_RESET_PASS}
                </Button>
              </div>              
            </Form>
          </div>
        </div>
      </section>
	)
}

export default ResetNewPassword;
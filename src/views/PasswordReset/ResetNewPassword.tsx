
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

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { URL_BASE, LOGIN, REGISTER, PASSWORD_RESET  } from '../../config/rutas/rutas';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';
import ButtonLoading from '../../components/Loading/ButtonLoading';
import ButtonSave from '../../components/Loading/ButtonSave';

function ResetNewPassword(){

  const  { t, i18n } = useTranslation();
  const endpoint = URL_BASE + PASSWORD_RESET;  
  let valido = true;
	//Cargando Loading
	const [isLoading, setIsLoading] = useState (false);
  const [servidorAPI, setServidorAPI] = useState(false);
  const [email,setEmail] = useState('');
  const [token,setToken] = useState('');
  const [bloquearEmail,setBloquearEmail] = useState(false);
  const [password,setPassword] = useState('');
  const [password_confirmation,setPassword_confirmation] = useState('');
  const [vacio, setVacio] = useState(false);
  const [diferentes, setDiferentes] = useState(false);
  const [estado,setEstado] = useState(false);  
  const [passwordOk,setPasswordOk] = useState(false);
	
  useEffect(() => {    
    const url = window.location.href;// Toma la URL de la página WEB
    const parts = url.split('/'); // La divide en 6 Partes    
    const path = parts[5]; // La quinata Parte contiene el Token y el Email   
    const queryParams = path.split('?'); //Vuelve a dividir en dos partes    
    const tokenReseat = queryParams[0]; // La primera Parte extrae el Token   
    const mailUser = queryParams[1]; 
    const mail = mailUser.split('=')[1]; // La segunda parte extrae el Email       
    const decodedEmail = decodeURIComponent(mail); //Formatea de nuevo el Mail    
    setEmail(decodedEmail); //Asignamos el Mail al campo Input de Mail
    setBloquearEmail(true);
    setToken(tokenReseat); // Asignamos el Token a la Variable Token, para luego enviar a la API   
  },[])

  const handleMailChange = (e) => {
      setEmail(e.target.value);      
  }

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);      
      setEstado(false);
      setServidorAPI(false);
      setDiferentes(false);
      setVacio(false);
    }

    const handlePassword2Change = (e) => {
      setPassword_confirmation(e.target.value);      
      setEstado(false);
      setServidorAPI(false);
      setDiferentes(false);
      setVacio(false);
    }

	const reset = async (e) => {
    setPasswordOk(false);
		e.preventDefault();    
    if(password !== password_confirmation){
      setDiferentes(true);        
      valido = false;
    }
    if(password === '' || password_confirmation === ''){
      setVacio(true);
      valido = false;
    }
    if(valido){
      setIsLoading(true);      
  		try{
  			setIsLoading(true);			
  			setServidorAPI(false);
  			const datos = await axios.post(endpoint,{
          email: email,
          password: password,
          password_confirmation: password_confirmation,
          token: token
        });
        const status = datos.status;
        if(status === 200){ 
          setIsLoading(false);
          setPasswordOk(true);
          setEmail('');
          setPassword_confirmation('');
          setPassword('');
          setToken('');
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
          setEstado(true);
        }else{
        	setServidorAPI(true);
          setIsLoading(false);
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
            <h3>{t('reset.password.title')}</h3><div></div>              
                <div style={{textAlign: "center"}}>
                  <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
                </div>                
                <div>
                  { estado ? <div style={{color:"red", textAlign:"center"}}>{t('error.datos')}</div> : <div></div> }
                  { servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{t('error.server.api')}</div> : <div></div> }
                  { passwordOk ? <div style={{color:"green", textAlign:"center"}}>{t('reset.pasword.ok')}</div> : <div></div> }
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingemail"
                  label={t('login.label.email')}
                  className="mb-3"
                >
                <Form.Control 
                  type="email" 
                  name="email"
                  value={email}
                  onChange={ handleMailChange }                  
                  placeholder={t('login.label.email')}
                  disabled={bloquearEmail} 
                  autoComplete="on"/>
                  </FloatingLabel>              
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingPassword"
                  label={t('login.label.password')}
                  className="mb-3"
                >
                <Form.Control 
                  type="password" 
                  name="password"
                  value={password} 
                  onChange={ handlePasswordChange }
                  placeholder={t('login.label.password')}
                  disabled={isLoading} 
                  autoComplete="on"/>                  
                  </FloatingLabel>
                  { vacio ? <Form.Label style={{color:"red", fontSize: "small", textAlign:"center"}}>{t('login.error.password')}</Form.Label> : <div></div> }
                  { diferentes ? <Form.Label style={{color:"red", fontSize: "small", textAlign:"center"}}>{t('reset.error.diferent')}</Form.Label> : <div></div> }              
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingPassword2"
                  label={t('reset.password.again')}
                  className="mb-3"
                >
                <Form.Control 
                  type="password" 
                  name="password_confirmation"
                  value={password_confirmation} 
                  onChange={ handlePassword2Change }
                  placeholder={t('reset.password.again')}
                  disabled={isLoading} 
                  autoComplete="on"/>                  
                  </FloatingLabel>
                  { vacio ? <Form.Label style={{color:"red", fontSize: "small", textAlign:"center"}}>{t('login.error.password')}</Form.Label> : <div></div> }
                  { diferentes ? <Form.Label style={{color:"red", fontSize: "small", textAlign:"center"}}>{t('reset.error.diferent')}</Form.Label> : <div></div> }                   
              </Form.Group>
              {isLoading ? 
                <ButtonLoading msg={t('login.validate.wait')} /> :
                <ButtonSave disable={isLoading} title={t('send.button.recovery')}/> }
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

export default ResetNewPassword;
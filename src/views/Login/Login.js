/**
 * El presente componente permite validar al usuario y guardar el Token y los
 * datos del usuario de forma global con  la libreria Zustand, la cual
 * puede ser usada desde cualquier parte de la aplicación sin problema
 * también los datos se guardan en el LocalStorage, una vez haga Logout
 * se borran todos los datos globales y el LocalStorage
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Login
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 */

import React, { useState } from 'react';
import { UseData } from '../../store/UserLogin';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import { 
  URL_BASE, 
  LOGIN, 
  DASHBOARD } from '../../config/rutas/rutas';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import {
  ERROR_EMAIL,
  ERROR_PASSWORD,
  ERROR_DATOS,
  ERROR_SERVER_API,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  BNT_LOGIN,
  MSG_PASSWORD,
  VALIDATE_WAIT
} from '../../config/label/label';

function Login(){
  const _token = UseData(state => state.setToken);
  const _user = UseData(state => state.setUser);

  let valido = true;
  const endpoint = URL_BASE + LOGIN;
  // Validaciones form  
  const [invalidMailInput,setInvalidMailInput] = useState(false);  
  const [invalidPasswordInput,setInvalidPasswordInput] = useState(false);
  //Campos del form
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [estado, setEstado] = useState(false);
  const [servidorAPI, setServidorAPI] = useState(false);
  //Cargando Loading
  const [isLoading, setIsLoading] = useState (false);
  //redireccionar la página
  const navigate = useNavigate();
  //Acceso al Context Global, para gusradar Los datos del Usuario y Token.

  const handleMailChange = (e) => {
    setEmail(e.target.value);
    setInvalidMailInput(false);
    setEstado(false);
    setServidorAPI(false);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setInvalidPasswordInput(false);
    setEstado(false);
    setServidorAPI(false);
  }

  const login = async (e) => {      
    e.preventDefault(); 
    setEstado(false);
    setServidorAPI(false);      
    valido = true;
    if(email === ''){            
      setInvalidMailInput(true);
      valido = false;
    }    
    if(password === ''){      
      setInvalidPasswordInput(true);
      valido = false;
    }    
    if(valido){
      setIsLoading(true);
      try{        
        const datos = await axios.post(endpoint, {
          email: email, 
          password: password
        });
        const status = datos.status;        
        if(status === 201){           
          _token(datos.data.access_token);          
          _user(datos.data.user);          
          setEstado(false);
          setIsLoading(false);
          navigate(DASHBOARD);          
        }else{          
          setEstado(true);
          setIsLoading(false);
          navigate(LOGIN);
        }
      }catch(error){        
        if(error.code === "ERR_NETWORK"){
          setServidorAPI(true);
        }else{
          setEstado(true);
        }     
      }finally{
        setIsLoading(false);        
      }
    }else{
      setIsLoading(false);
    }
  }
    return (
    <div className="auth-wrapper">
      <div className="auth-inner">      
        <Form onSubmit={login}>
        <h3>Login</h3><div></div>    
            <div style={{textAlign: "center"}}>
              <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
            </div>
            <div> 
              {isLoading ? <Loading msg={VALIDATE_WAIT} /> : <div></div>}
            </div>            
            <div>
              {estado ? <div style={{color:"red", textAlign:"center"}}>{ERROR_DATOS}</div> : <div></div>}
              {servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{ERROR_SERVER_API}</div> : <div></div>}              
            </div>            
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{LABEL_EMAIL}</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={email} 
              onChange={ handleMailChange }
              placeholder="Enter email" 
              disabled={isLoading} 
              autoComplete="on"/>
              {invalidMailInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{ERROR_EMAIL}</Form.Label> : ''}
            <Form.Text className="text-muted">
              {MSG_PASSWORD}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{LABEL_PASSWORD}</Form.Label>
            <Form.Control 
              type="password" 
              name="password" 
              value={password} 
              onChange={ handlePasswordChange }                
              placeholder="Password"
              disabled={isLoading}
              autoComplete="on" />
              {invalidPasswordInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{ERROR_PASSWORD}</Form.Label> : ''}
          </Form.Group>          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {BNT_LOGIN}
          </Button>
        </Form>
      </div>
    </div> 
    )
}

export default Login

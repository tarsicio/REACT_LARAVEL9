/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Login
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 * El presente componente permite validar al usuario y guardar el Token y los
 * datos del usuario de forma global con  la libreria Zustand, la cual
 * puede ser usada desde cualquier parte de la aplicación sin problema
 * también los datos se guardan en el LocalStorage, una vez haga Logout
 * se borran todos los datos globales y el LocalStorage
 */

import React, { useState, useEffect } from 'react';
import { UseData } from '../../store/UserLogin';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ButtonLoading from '../../components/Loading/ButtonLoading';
import ButtonSave from '../../components/Loading/ButtonSave';
import ButtonRed_Token from '../../components/Loading/ButtonRed_Token';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  URL_BASE, 
  LOGIN,
  REGISTER, 
  DASHBOARD,
  REQUEST_PASSWORD } from '../../config/rutas/rutas';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';

function Login(){ 
  const  { t, i18n } = useTranslation();
  const _token = UseData(state => state.setToken);
  const _tokenType = UseData(state => state.setTokenType);
  const _XSRFTOKEN = UseData(state => state._XSRFTOKEN);
  const _user = UseData(state => state.setUser);  
  let valido:boolean = true;
  let decode = null;
  const endpoint:string = URL_BASE + LOGIN;
  // Validaciones form  
  const [invalidMailInput,setInvalidMailInput] = useState<boolean>(false);  
  const [invalidPasswordInput,setInvalidPasswordInput] = useState<boolean>(false);
  //Campos del form
  const [email, setEmail] = useState<string>('');  
  const [password, setPassword] = useState<string>('');
  const [estado, setEstado] = useState<boolean>(false);
  const [servidorAPI, setServidorAPI] = useState<boolean>(false);
  const [token_API, setToken_API] = useState<boolean>(false);
  //Cargando Loading
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //redireccionar la página
  const navigate = useNavigate();
  //'X-Requested-With': 'XMLHttpRequest'
  const http = axios.create({
    baseURL: URL_BASE,
    headers:{ 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    withCredentials: true
  });
  
  const handleMailChange = (e:any) => {
    setEmail(e.target.value);
    setInvalidMailInput(false);
    setEstado(false);
    setServidorAPI(false);
    setToken_API(false);
  }

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
    setInvalidPasswordInput(false);
    setEstado(false);
    setServidorAPI(false);
    setToken_API(false);
  }

  const login = async (e:any) => {      
    e.preventDefault(); 
    setEstado(false);
    setServidorAPI(false); 
    setToken_API(false);     
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
        const datos = await http.post(LOGIN, {
          email: email, 
          password: password,
          _token_csrf: _XSRFTOKEN
        });         
        console.log(datos);       
        const status:number = datos.status;              
        if(status === 201){           
          _token(datos.data.access_token);
          _tokenType(datos.data.token_type);
          _user(datos.data.user);          
          setEstado(false);
          setIsLoading(false);          
          navigate(DASHBOARD);          
        }else{          
          setEstado(true);
          setIsLoading(false);
          navigate(LOGIN);
        }
      }catch(error:any){ 
        console.log(error);       
        if(error.code === "ERR_NETWORK"){
          setServidorAPI(true);
        }else if(error.code === "ERR_BAD_REQUEST"){
          setToken_API(true);
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
      <section>          
        <div className="auth-wrapper" id="login">
          <div className="auth-inner">      
            <Form onSubmit={login}>
            <h3>{t('login.title')}</h3>              
                <div style={{textAlign: "center"}}>
                  <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
                </div>                
                <div>
                  {estado ? <div style={{color:"red", textAlign:"center"}}>{t('error.datos')}</div> : <div></div>}
                  {servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{t('error.server.api')}</div> : <div></div>}
                  {token_API ? <div style={{color:"red", textAlign:"center"}}>{t('error.server.toke_api')}</div> : <div></div>}
                </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <input type="hidden" name="_token_csrf" id="csrf-token" value={ _XSRFTOKEN } />
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
                  disabled={isLoading} 
                  autoComplete="on"/>
                  </FloatingLabel>
                  {invalidMailInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('login.error.email')}</Form.Label> : ''}
                <Form.Text className="text-muted">
                  <div>{t('login.msg.importan')}</div>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">                
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
                  disabled={isLoading}
                  autoComplete="on" />
                  </FloatingLabel>
                  {invalidPasswordInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('login.error.password')}</Form.Label> : ''}
              </Form.Group>          
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={t('login.check.me')} />
              </Form.Group>
              {token_API ? <ButtonRed_Token disable="true" title={t('login.button_token_CSRF')} /> :
                isLoading ? 
                <ButtonLoading msg={t('login.validate.wait')} /> : 
                <ButtonSave disable={isLoading} title={t('login.button')}/>
              }              
              <p className="forgot-password text-right">
                <Link className="nav-link" to={REQUEST_PASSWORD} style={{color: "blue"}}>
                  {t('login.msg.recovery')}
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

export default Login

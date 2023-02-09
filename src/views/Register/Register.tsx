/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Register
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonLoading from '../../components/Loading/ButtonLoading';
import { useNavigate } from 'react-router-dom';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { URL_BASE, REGISTER, BIENVENIDO, LOGIN } from '../../config/rutas/rutas';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Register(){
  const  { t, i18n } = useTranslation(); 
  const endpoint = URL_BASE + REGISTER;
  //redireccionar la página
  const navigate = useNavigate();
  let valido = true;
  // Validaciones form  
  const [invalidNameInput,setInvalidNameInput] = useState(false);  
  const [invalidUserNameInput,setInvalidUserNameInput] = useState(false);
  const [invalidMailInput,setInvalidMailInput] = useState(false);  
  const [invalidPasswordInput,setInvalidPasswordInput] = useState(false);
  const [invalidCheck,setInvalidCheck] = useState(false);
  //Campos del form
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [terms, setTerms] = useState(false);  
  //Cargando Loading y Error Server API
  const [isLoading, setIsLoading] = useState (false);
  const [servidorAPI, setServidorAPI] = useState(false);
  const [erroresForm, setErroresForm] = useState(false);
  //Errores de Validacion
  let obj = {};
  const [nameError, setNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // ******************************************************************
  const [nameErrorActivo, setNameErrorActivo] = useState(false);
  const [userNameErrorActivo, setUserNameErrorActivo] = useState(false);
  const [emailErrorActivo, setEmailErrorActivo] = useState(false);
  const [passwordErrorActivo, setPasswordErrorActivo] = useState(false);

  const handlNameChange = (e) => {
    setName(e.target.value);
    setNameErrorActivo(false);
    setInvalidNameInput(false);
    setServidorAPI(false);
  }

  const handlUserNameChange = (e) => {
    setUsername(e.target.value);
    setUserNameErrorActivo(false);
    setInvalidUserNameInput(false);
    setServidorAPI(false);
  }

  const handlEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailErrorActivo(false);
    setInvalidMailInput(false);    
    setServidorAPI(false);
  }

  const handlPasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordErrorActivo(false);
    setInvalidPasswordInput(false);        
    setServidorAPI(false);
  }
  
  const handlCheckChange = (e) => {
    setTerms(e.target.checked);    
    setInvalidCheck(false);        
    setServidorAPI(false);
  }

  const register = async (e) => {    
    e.preventDefault();
    setErroresForm(false);
    setServidorAPI(false);    
    if(name === ''){            
      setInvalidNameInput(true);
      valido = false;
    }
    if(username === ''){            
      setInvalidUserNameInput(true);
      valido = false;
    }
    if(email === ''){            
      setInvalidMailInput(true);
      valido = false;
    }    
    if(password === ''){      
      setInvalidPasswordInput(true);
      valido = false;
    }
    if(terms === false){      
      setInvalidCheck(true);
      valido = false;
    }
    if(valido){      
      setIsLoading(true);
      try{
        const datos = await axios.post(endpoint, {
          name: name, 
          username: username, 
          email: email, 
          password: password,
          terms: terms
        });
        const code = datos.status;        
          if(code === 201){
            setIsLoading(false);
            navigate(BIENVENIDO);          
          }else{ 
            console.log(datos)
          }
        }catch(error){ 
          if(error.code === "ERR_NETWORK"){
            setServidorAPI(true);
          }else if(error.code === "ERR_BAD_REQUEST") {
            setIsLoading(false);
            setErroresForm(true);
            obj = error.response.data.dato;            
            let keys = Object.keys(obj);            
            keys.forEach(function (key) {              
              if(key === 'name'){setNameError(obj[key][0]);setNameErrorActivo(true);}
              if(key === 'username'){setUserNameError(obj[key][0]);setUserNameErrorActivo(true);}
              if(key === 'email'){setEmailError(obj[key][0]);setEmailErrorActivo(true);}
              if(key === 'password'){setPasswordError(obj[key][0]);setPasswordErrorActivo(true);}              
            });
          }else if(error.code === "ERR_BAD_RESPONSE") {
            setServidorAPI(true);
          }else{
            setServidorAPI(true);
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
        <div className="auth-wrapper" id="register">
          <div className="auth-inner">      
            <Form onSubmit={register} >
              <h3>{t('register.title')}</h3>              
              <div style={{textAlign: "center"}}>
                <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
              </div>
              {servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{t('error.server.api')}</div> : <div></div>}
              {erroresForm ? <div style={{color:"red", textAlign:"center"}}>{t('register.error.form')}</div> : <div></div>}              
              <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingName"
                  label={t('register.full.name')}
                  className="mb-3"
                >
                <Form.Control 
                  type="text" 
                  name="name"
                  value={name} 
                  onChange={ handlNameChange }
                  placeholder={t('register.full.name')}
                  disabled={isLoading} 
                  autoComplete="on"/>
                  </FloatingLabel>
                  {invalidNameInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('register.error.fullname')}</Form.Label> : ''}
                  {nameErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{nameError}</Form.Label> : ''}
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">                
                <FloatingLabel
                  controlId="floatingUserName"
                  label={t('register.user.name')}
                  className="mb-3"
                >
                <Form.Control 
                  type="text" 
                  name="username"
                  value={username} 
                  onChange={ handlUserNameChange }
                  placeholder={t('register.user.name')}
                  disabled={isLoading} 
                  autoComplete="on"/>
                  </FloatingLabel>
                  {invalidUserNameInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('register.error.username')}</Form.Label> : ''}
                  {userNameErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{userNameError}</Form.Label> : ''}
              </Form.Group>

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
                  onChange={ handlEmailChange }
                  placeholder={t('login.label.email')} 
                  disabled={isLoading} 
                  autoComplete="on"/>
                  </FloatingLabel>
                  {invalidMailInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('login.error.email')}</Form.Label> : ''}
                  {emailErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{emailError}</Form.Label> : ''}
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
                  onChange={ handlPasswordChange }
                  placeholder={t('login.label.password')}
                  disabled={isLoading}
                  autoComplete="on" />
                  </FloatingLabel>
                  {invalidPasswordInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('login.error.password')}</Form.Label> : ''}
                  {passwordErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{passwordError}</Form.Label> : ''}

                  <Form.Text className="text-muted">
                    <div>{t('login.msg.importan')}</div>
                  </Form.Text>                  
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                  type="checkbox" 
                  name="terms" 
                  label={t('register.terminos')} 
                  disabled={isLoading}
                  autoComplete="on"
                  value={terms}
                  onChange={ handlCheckChange } />
                  {invalidCheck ? <Form.Label style={{color:"red", fontSize: "small"}}>{t('register.error.terms')}</Form.Label> : ''}            
              </Form.Group> 
              {isLoading ? <ButtonLoading msg={t('register.wait')} /> :           
              <div className="d-grid">
                <Button type="submit" className="btn btn-primary" disabled={isLoading} >
                  {t('register.button')} 
                </Button>
              </div> }
              <p className="forgot-password text-right">
                <Link className="nav-link" to={LOGIN} style={{color: "blue"}}>
                  {t('register.ready')} 
                </Link>                 
              </p>
            </Form>
          </div>
        </div>
      </section>
    )
}
export default Register;
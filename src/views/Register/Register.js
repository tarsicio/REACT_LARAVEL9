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
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { URL_BASE, REGISTER, HOME } from '../../config/routers/routes/route';
import {
  ERROR_NAME,
  ERROR_USER_NAME,
  ERROR_EMAIL,
  ERROR_PASSWORD,
  ERROR_SERVER_API,
  LABEL_NAME,
  LABEL_USER_NAME,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  BNT_REGISTER,
  MSG_PASSWORD,
  REGISTER_WAIT,
  TERMS_NEED,
  MSG_ERROR_FORM
} from '../../consts/msgLogin/MsgLogin';

function Register(){
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
        const code = datos.data.code;        
          if(code === 201){
            setIsLoading(false);
            navigate(HOME);          
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
      <div className="auth-wrapper" style={{padding:20}}>
        <div className="auth-inner">      
          <Form onSubmit={register} style={{padding:0}}>
            <h3>Register</h3>
            <div style={{textAlign: "center"}}>
              <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
            </div>
            {servidorAPI ? <div style={{color:"red", textAlign:"center"}}>{ERROR_SERVER_API}</div> : <div></div>}
            {erroresForm ? <div style={{color:"red", textAlign:"center"}}>{MSG_ERROR_FORM}</div> : <div></div>}
            {isLoading ? <Loading msg={REGISTER_WAIT} /> : <div></div>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{LABEL_NAME}</Form.Label>
              <Form.Control 
                type="text" 
                name="name"
                value={name} 
                onChange={ handlNameChange }
                placeholder="Enter Full Name" 
                disabled={isLoading} 
                autoComplete="on"/>
                {invalidNameInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{ERROR_NAME}</Form.Label> : ''}
                {nameErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{nameError}</Form.Label> : ''}
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{LABEL_USER_NAME}</Form.Label>
              <Form.Control 
                type="text" 
                name="username"
                value={username} 
                onChange={ handlUserNameChange }
                placeholder="Enter User Name" 
                disabled={isLoading} 
                autoComplete="on"/>
                {invalidUserNameInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{ERROR_USER_NAME}</Form.Label> : ''}
                {userNameErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{userNameError}</Form.Label> : ''}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{LABEL_EMAIL}</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={email} 
                onChange={ handlEmailChange }
                placeholder="Enter email" 
                disabled={isLoading} 
                autoComplete="on"/>
                {invalidMailInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{ERROR_EMAIL}</Form.Label> : ''}
                {emailErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{emailError}</Form.Label> : ''}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{LABEL_PASSWORD}</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                value={password} 
                onChange={ handlPasswordChange }
                placeholder="Password"
                disabled={isLoading}
                autoComplete="on" />
                <Form.Text className="text-muted">
                  {MSG_PASSWORD}
                </Form.Text>
                {invalidPasswordInput ? <Form.Label style={{color:"red", fontSize: "small"}}>{ERROR_PASSWORD}</Form.Label> : ''}
                {passwordErrorActivo ? <Form.Label style={{color:"red", fontSize: "small"}}>{passwordError}</Form.Label> : ''}
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                name="terms" 
                label="Acept Terms" 
                disabled={isLoading}
                autoComplete="on"
                value={terms}
                onChange={ handlCheckChange } />
                {invalidCheck ? <Form.Label style={{color:"red", fontSize: "small"}}>{TERMS_NEED}</Form.Label> : ''}            
            </Form.Group>            
            <div className="d-grid">
              <Button type="submit" className="btn btn-primary" disabled={isLoading} >
                {BNT_REGISTER}
              </Button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/login">login?</a>
            </p>
          </Form>
        </div>
      </div>
    )
}
export default Register;
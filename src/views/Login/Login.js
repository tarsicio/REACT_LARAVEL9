import React, { useState } from 'react';
import { useData } from '../../store/userLogin';
//import shallow from 'zustand/shallow';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

import { 
  URL_BASE, 
  LOGIN, 
  DASHBOARD } from '../../config/routers/routes/route';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import {
  ERROR_EMAIL,
  ERROR_PASSWORD,
  ERROR_DATOS,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  BNT_LOGIN,
  MSG_PASSWORD
} from '../../consts/msgLogin/MsgLogin';

function Login(){  
  const userData = useData();  
  let valido = true;
  const endpoint = URL_BASE + LOGIN;
  // Validaciones form  
  const [invalidMailInput,setInvalidMailInput] = useState(false);  
  const [invalidPasswordInput,setInvalidPasswordInput] = useState(false);
  //Campos del form
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [estado, setEstado] = useState(false);
  //Cargando Loading
  const [isLoading, setIsLoading] = useState (false);
  //redireccionar la página
  const navigate = useNavigate();
  //Acceso al Context Global, para gusradar Los datos del Usuario y Token.

  const handleMailChange = (e) => {
    setEmail(e.target.value);
    setInvalidMailInput(false);
    setEstado(false);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setInvalidPasswordInput(false);
    setEstado(false);
  }

  const login = async (e) => {
    e.preventDefault(); 
    setEstado(false);    
    setIsLoading(true);
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
      try{        
        const datos = await axios.post(endpoint, {
          email: email, 
          password: password
        });        
        const status = datos.status;
        if(status === 201){          
          userData.setToken(datos.data.access_token);
          userData.setUser(datos.data.user);
          navigate(DASHBOARD);
          setEstado(false);
          setIsLoading(false);
        }else{          
          setEstado(true);
          setIsLoading(false);
          navigate(LOGIN);
        }
      }catch(datos){        
        if(datos.status === 401){
          setEstado(true);          
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
    <div className="auth-wrapper" style={{padding:12}}>
      <div className="auth-inner">      
        <Form onSubmit={login}>
        <h3>Login</h3><div></div>    
            <div style={{textAlign: "center"}}>
              <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
            </div>
            <div>
              {isLoading ? <Loading /> : <div></div>}
            </div>            
            <div>
              {estado ? <div style={{color:"red", textAlign:"center"}}>{ERROR_DATOS}</div> : <div></div>}
            </div>            
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{LABEL_EMAIL}</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={email} 
              onChange={ handleMailChange } 
              placeholder="Enter email" 
              disabled={isLoading} />
              {invalidMailInput ? <Form.Label style={{color:"red"}}>{ERROR_EMAIL}</Form.Label> : ''}
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
              disabled={isLoading} />
          </Form.Group>
          {invalidPasswordInput ? <Form.Label style={{color:"red"}}>{ERROR_PASSWORD}</Form.Label> : ''}
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

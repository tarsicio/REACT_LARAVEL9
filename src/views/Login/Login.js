import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loading from '../../components/Loading/Loading';
//import { useUserToggleContext } from "../../context/UserProvider";

import axios from 'axios';

import { URL_BASE, LOGIN, DASHBOARD } from '../../config/routers/routes/route';
import { LOGO_HORUS } from '../../config/routers/imgs/img';

function Login(){
  //const Login_Logout = useUserToggleContext();
  let valido = true;
  const endpoint = URL_BASE + LOGIN;
  // Validaciones form
  const [msgMail, setMsgMail] = useState('');
  const [invalidMailInput,setInvalidMailInput] = useState(false);
  const [msgPassword,setMsgPassword] = useState('');
  const [invalidPasswordInput,setInvalidPasswordInput] = useState(false);
  //Campos del form
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [estado, setEstado] = useState(false);
  //Cargando Loading
  const [isLoading, setIsLoading] = useState (false);
  //redireccionar la página
  const navigate = useNavigate();

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
      setMsgMail('El campo mail es obligatorio');
      setInvalidMailInput(true);
      valido = false;
    }    
    if(password === ''){
      setMsgPassword('El campo password es obligatorio');
      setInvalidPasswordInput(true);
      valido = false;
    }
    if(valido){
      try{
        const datos = await axios.post(endpoint, {
          email: email, 
          password: password
        });        
        const status = datos.data.status;
        console.log(status);  
        if(status === 201){
          navigate(DASHBOARD);
          setEstado(false);
          setIsLoading(false);
        }else{          
          setEstado(true);
          setIsLoading(false);
          navigate(LOGIN);
        }
      }catch(datos){        
        if(datos.response.data.status === 401){
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
              {estado ? <div style={{color:"red", textAlign:"center"}}>ERROR EN LOS DATOS VERIFIQUE</div> : <div></div>}
            </div>            
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={email} 
              onChange={ handleMailChange } 
              placeholder="Enter email" />
              {invalidMailInput ? <Form.Label style={{color:"red"}}>{msgMail}</Form.Label> : ''}
            <Form.Text className="text-muted">
              We'll never share your email and password with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              name="password" 
              value={password} 
              onChange={ handlePasswordChange }                
              placeholder="Password" />
          </Form.Group>
          {invalidPasswordInput ? <Form.Label style={{color:"red"}}>{msgPassword}</Form.Label> : ''}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login | Entrar
          </Button>
        </Form>
      </div>
    </div> 
    )
}

export default Login

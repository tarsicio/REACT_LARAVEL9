import React, {useState} from 'react';
//import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUserToggleContext } from "../../context/UserProvider";

//import axios from 'axios';

//import { URL_BASE, LOGIN, DASHBOARD } from '../../config/routers/routes/route';
import { LOGO_HORUS } from '../../config/routers/imgs/img';

function Login(){
  const Login_Logout = useUserToggleContext();
  //const endpoint = URL_BASE + LOGIN;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const navigate = useNavigate();
  
  /*const login = async (e) => {
    e.preventDefault();
    const datos = await axios.post(endpoint, {email: email, password: password});        
    const code = datos.data.code;  
    if(code === 201){
      navigate(DASHBOARD);
    }else{
      navigate(LOGIN);
    }
  }*/
    return (
    <div className="auth-wrapper" style={{padding:12}}>
      <div className="auth-inner">      
        <Form onSubmit={Login_Logout}>
        <h3>Login</h3><div></div>    
            <div style={{textAlign: "center"}}>
              <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
            </div>            
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={email} 
              onChange={ (e)=> setEmail(e.target.value)} 
              placeholder="Enter email" />
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
              onChange={ (e)=> setPassword(e.target.value)}
              placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div> 
    )
}

export default Login

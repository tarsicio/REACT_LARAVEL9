import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL_BASE, LOGIN, DASHBOARD } from '../../config/routers/routes/route';

import { LOGO_HORUS } from '../../config/routers/imgs/img';

const endpoint = URL_BASE + LOGIN;

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [estado, setEstado] = useState(true);
    const navigate = useNavigate();
    const ERROR = 'Datos errados, por favor verifique';

    const login = async (e) => {
        e.preventDefault();
        const datos = await axios.post(endpoint, {email: email, password: password});        
        const code = datos.data.code;
        const status = datos.data.status;        
        const msg = datos.data.message;
        console.log(code);
        console.log(status);
        console.log(msg);        
        if(code === 201){
          const token = datos.data.access_token;
          const namecomplete = datos.data.user.name;
          const avatar = datos.data.user.avatar;
          const mail = datos.data.user.email;
          localStorage.setItem('_token', token);
          localStorage.setItem('_namecomplete', namecomplete);
          localStorage.setItem('_avatar', avatar);
          localStorage.setItem('_mail', mail);
          setName(namecomplete);          
          //localStorage.removeItem('_namecomplete');
          // Aquí guardamos en una Galleta, Storage o en un react redux las credenciales
          // hay que hacer esta parte. esta pendiente.
          // Tambi´n tengo que estudiar cors en Laravel para saber quien entra a la api, ok
          navigate(DASHBOARD);
        }else{
          setEstado(!estado);
          navigate(LOGIN);
        }
        console.log(estado);
    }
    return (      
    <Form onSubmit={login}>
    <h3>Login</h3><div>{name}</div>    
        <div style={{textAlign: "center"}}>
          <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
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
    )
}

export default Login

import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import LogoHorus from '../../assets/img/horus.png';

const endpoint = 'http://localhost:8000/api/v1/login'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        const datos = await axios.post(endpoint, {email: email, password: password});        
        const code = datos.data.code;
        const status = datos.data.status;        
        const msg = datos.data.message;
        if(code === 201){
          const token = datos.data.access_token;
          const namecomplete = datos.data.user.name;
          const avatar = datos.data.user.avatar;
          const mail = datos.data.user.email;
          // Aquí guardamos en una Galleta, Storage o en un react redux las credenciales
          // hay que hacer esta parte. esta pendiente.
          // Tambi´n tengo que estudiar cors en Laravel para saber quien entra a la api, ok
          navigate('/dashboard');
        }else{
          navigate('/login');
        }
        
        

    }
    return (
      <>
      <form onSubmit={login}>
        <h3>Login</h3>
        <div style={{textAlign: "center"}}>
          <img src={LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email" 
            value={email} 
            onChange={ (e)=> setEmail(e.target.value)}           
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password} 
            onChange={ (e)=> setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="">password?</a>
        </p>
      </form>
      </>
    )
}

export default Login

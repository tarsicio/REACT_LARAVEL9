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
//import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { URL_BASE, REGISTER, DASHBOARD } from '../../config/routers/routes/route';

const endpoint = URL_BASE + REGISTER;

function Register(){
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const datos = await axios.post(endpoint, {name: name, username: username, email: email, password: password});
    const code = datos.data.code;
      if(code === 201){
        navigate(DASHBOARD);          
      }else{          
      }
  }    

    return (
      <div className="auth-wrapper" style={{padding:12}}>
        <div className="auth-inner">      
          <form onSubmit={register} style={{padding:0}}>
            <h3>Register</h3>
            <div style={{textAlign: "center"}}>
              <img src={LOGO_HORUS.LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
            </div>
            <div className="mb-3">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full name"
              />
            </div>

            <div className="mb-3">
              <label>User name</label>
              <input 
                type="text"
                name="username" 
                className="form-control" 
                placeholder="User name" 
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                register
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/login">login?</a>
            </p>
          </form>
        </div>
      </div>
    )
}
export default Register;
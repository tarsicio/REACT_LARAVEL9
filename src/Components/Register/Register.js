import React from 'react';
import LogoPost from '../../assets/img/logo-post.png';

function Register(){
    return (
      <form>
        <h3>Register</h3>
        <div style={{textAlign: "center"}}>
          <img src={LogoPost} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
        </div>
        <div className="mb-3">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
          />
        </div>

        <div className="mb-3">
          <label>User name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="User name" 
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
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
    )
}
export default Register
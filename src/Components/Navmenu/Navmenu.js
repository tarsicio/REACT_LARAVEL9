import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import LogoPost from '../../assets/img/logo-post.png';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navmenu(){
  return (
      <Router>
        <div className="Navmenu">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/sign-in'}>
              <img src={LogoPost} style={{width: 30, height: 30,}} alt="Logo_Post"  className="img-fluid" />              
              </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-in'}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/sign-up'}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    )
}

export default Navmenu
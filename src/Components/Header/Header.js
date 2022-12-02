import LogoPost from '../../assets/img/logo-post.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header(){
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
        </div>
      </Router>
    )
}
export default Header;
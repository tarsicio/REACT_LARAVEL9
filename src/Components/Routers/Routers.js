import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Routers(){
	return(
		<>
			<Router>
				<div className="auth-wrapper">
		            <div className="auth-inner">
		              <Routes>
		                <Route exact path="/" element={<Login />} />
		                <Route path="/sign-in" element={<Login />} />
		                <Route path="/sign-up" element={<SignUp />} />
		              </Routes>
		            </div>
		        </div>
	        </Router>
		</>
	)
}

export default Routers;
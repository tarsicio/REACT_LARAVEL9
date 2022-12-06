import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../Home/Home';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Routers(){
	return(
		<>
			<Router>
				<div className="auth-wrapper">
		            <div className="auth-inner">
		              <Routes>
		                <Route exact path="/" element={<Home />} />
		                <Route path="/login" element={<Login />} />
		                <Route path="/register" element={<Register />} />
		              </Routes>
		            </div>
		        </div>
	        </Router>
		</>
	)
}

export default Routers;
import React from 'react';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Register from '../Register/Register';
import Home from '../Home/Home';

import { Routes, Route} from 'react-router-dom';

function Routers(){
	return(
		<>
			<div>
	          <div>
	            <Routes>
	              <Route exact path={HOME} element={<Home />} />
	              <Route path={LOGIN} element={<Login />} />
	              <Route path={REGISTER} element={<Register />} />
	              <Route path={DASHBOARD} element={<Dashboard />} />
	              <Route path={LOGOUT} element={<Logout />} />
	            </Routes>
	          </div>
	        </div>
		</>
	)
}

export default Routers;
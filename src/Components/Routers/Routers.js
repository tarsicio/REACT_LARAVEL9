import React from 'react';
import Login from '../../views/Login/Login';
import Logout from '../../views/Logout/Logout';
import Register from '../../views/Register/Register';
import Home from '../../views/Home/Home';
import Dashboard from '../../views/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HOME, LOGIN, LOGOUT, REGISTER, DASHBOARD } from '../../config/routers/routes/route';
import PrivateRouters from './PrivateRouters'
import { UseData } from '../../store/UserLogin';
import Navigationbar from '../Navigationbar/Navigationbar';

function Routers(){
	const _token = UseData(state => state._token);
	return(		
		<BrowserRouter>
			<Navigationbar />
			<Routes>
				<Route exact path={HOME} element={<Home />} />
				<Route path={LOGIN} element={<Login />} />
				<Route path={REGISTER} element={<Register />} />
				<Route path={DASHBOARD} element={
					<PrivateRouters token={_token}>
					<Dashboard />
					</PrivateRouters>  
				} /> 
				<Route path={LOGOUT} element={
					<PrivateRouters token={_token}>
					<Logout />
					</PrivateRouters>  
				} />
        	</Routes>	        
	    </BrowserRouter>		
	)
}

export default Routers;
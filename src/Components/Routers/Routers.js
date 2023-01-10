/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Routers
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import Login from '../../views/Login/Login';
import Logout from '../../views/Logout/Logout';
import Register from '../../views/Register/Register';
import Home from '../../views/Home/Home';
import Dashboard from '../../views/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HOME, LOGIN, LOGOUT, REGISTER, DASHBOARD } from '../../config/routers/routes/route';
import Private from './Private'
import Public from './Public.js'
import { UseData } from '../../store/UserLogin';
import Navigationbar from '../Navigationbar/Navigationbar';

function Routers(){
	const _token = UseData(state => state._token);
	return(		
		<BrowserRouter>
			<Navigationbar />
			<Routes>
				<Route exact path={HOME} element={<Home />} />				
				<Route path={LOGIN} element={
					<Public token={_token}>
						<Login />
					</Public>  
				} />
				<Route path={REGISTER} element={
					<Public token={_token}>
						<Register />
					</Public>  
				} /> 				
				<Route path={DASHBOARD} element={
					<Private token={_token}>
						<Dashboard />
					</Private>  
				} /> 
				<Route path={LOGOUT} element={
					<Private token={_token}>
						<Logout />
					</Private>  
				} />
        	</Routes>	        
	    </BrowserRouter>		
	)
}

export default Routers;
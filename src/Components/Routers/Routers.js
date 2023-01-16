/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Routers
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 * Sistemas de rutas de la aplicación HORUS | 2023
 */

import React from 'react';
import Login from '../../views/Login/Login';
import Logout from '../../views/Logout/Logout';
import Register from '../../views/Register/Register';
import Home from '../../views/Home/Home';
import Dashboard from '../../views/Dashboard/Dashboard';
import NoFound404 from '../../views/Page/NoFound404';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HOME, LOGIN, LOGOUT, REGISTER, DASHBOARD } from '../../config/rutas/rutas';
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
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
					<PublicRouter token={_token}>
						<Login />
					</PublicRouter>  
				} />
				<Route path={REGISTER} element={
					<PublicRouter token={_token}>
						<Register />
					</PublicRouter>  
				} /> 				
				<Route path={DASHBOARD} element={
					<PrivateRouter token={_token}>
						<Dashboard />
					</PrivateRouter>  
				} /> 
				<Route path={LOGOUT} element={
					<PrivateRouter token={_token}>
						<Logout />
					</PrivateRouter>  
				} />
				<Route path="*" element={<NoFound404 msg="La URL Solicitada No Existe... "/>} />
        	</Routes>	        
	    </BrowserRouter>		
	)
}

export default Routers;
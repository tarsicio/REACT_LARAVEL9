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
import SendMailPasswordRecover from '../../views/PasswordReset/SendMailPasswordRecover';
import ResetNewPassword from '../../views/PasswordReset/ResetNewPassword';
import Logout from '../../views/Logout/Logout';
import Register from '../../views/Register/Register';
import MsgRegistro from '../../views/Register/MsgRegistro';
import ConfirmRegister from '../../views/Register/ConfirmRegister';
import Home from '../../views/Home/Home';
import Dashboard from '../../views/Dashboard/Dashboard';
import NoFound404 from '../../views/Page/NoFound404';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutMain from '../../layout/LayoutMain';
import { 
	HOME, 
	LOGIN, 
	LOGOUT, 
	REGISTER, 
	DASHBOARD,
	REQUEST_PASSWORD,
	RESET_PASSWORD,
	CONFIRM,
	BIENVENIDO } from '../../config/rutas/rutas';
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import { UseData } from '../../store/UserLogin';
import Header from '../Header/Header';
import { useTranslation } from 'react-i18next';

function Routers(){
	const  { t, i18n } = useTranslation();
	const _token = UseData(state => state._token);
	return(		
		<BrowserRouter>
			<Header />
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
				<Route path={REQUEST_PASSWORD} element={
					<PublicRouter token={_token}>
						<SendMailPasswordRecover />
					</PublicRouter>  
				} />
				<Route path={RESET_PASSWORD} element={
					<PublicRouter token={_token}>
						<ResetNewPassword />
					</PublicRouter>  
				} />
				<Route path={CONFIRM} element={
					<PublicRouter token={_token}>
						<ConfirmRegister />
					</PublicRouter>  
				} />
				<Route path={BIENVENIDO} element={
					<PublicRouter token={_token}>
						<MsgRegistro />
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
				<Route path="*" element={
					<NoFound404 msg={t('horus.404.msg')} />
				} />
        	</Routes>	        
	    </BrowserRouter>		
	)
}

export default Routers;
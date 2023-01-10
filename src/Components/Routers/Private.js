/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Private
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import { Navigate } from 'react-router-dom';
import { LOGIN } from '../../config/routers/routes/route';

export default function Private({ token,children }){	
	if(token === null){
		return <Navigate to={LOGIN} />
	}
	return children
}
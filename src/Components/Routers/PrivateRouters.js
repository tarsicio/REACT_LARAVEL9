import { Navigate } from 'react-router-dom';
import { LOGIN } from '../../config/routers/routes/route';

export default function PrivateRouters({ token,children }){	
	if(token === null){
		return <Navigate to={LOGIN} />
	}
	return children
}
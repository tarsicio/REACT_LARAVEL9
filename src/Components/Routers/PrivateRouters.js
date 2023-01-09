import { Navigate } from 'react-router-dom';

export default function PrivateRouters({token,children}){	
	if(token === null){
		return <Navigate to='/login' />
	}
	return children
}
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { useData } from '../../store/userLogin';
import '../../components/Footer/style.css';
import { LOGIN, HOME } from '../../config/routers/routes/route';
import { useNavigate } from 'react-router-dom';

function Dashboard(){
	const _token = useData(state => state._token);
	const userData = useData(state => state._user);
	const userLogout = useData(state => state.logoutUser);	
	const navigate = useNavigate();	
	useEffect(()=>{
		// Modificar este useEffect para que no rederice el componente luego cierre de una vez
		// Verificar bien.
		if(_token === null){
			navigate(LOGIN);
		}
	});
	const logoutChange = (e) => {
		userLogout();
		localStorage.removeItem('DatosHorusUsersToken2023');		
		//hacer logout en la API-REST de LARAVEL
		navigate(HOME);
  	}
		return(
			<>		
				<div className="auth-wrapper container hero__main">
					<div className="auth-inner">
						<center>
							<h1>DASHBOARD</h1>
							<div style={{textAlign: "center"}}>
		          				<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
		        			</div>
		        			<div>
								<h3>SISTEMA HORUS</h3>
							</div>
							<div>
								<h1>USER</h1>
								<h6>AVATAR:<p>{ userData && userData.avatar }</p></h6>
								<h6>NAME:<p>{ userData && userData.name }</p></h6>
								<h6>ROLS:<p>{ userData && userData.rols_id }</p></h6>
								<h6>EMAIL:<p>{ userData &&  userData.email }</p></h6>
								<Button onClick={ logoutChange } variant="primary" type="submit">
						        	Logout
						        </Button>
							</div>						
						</center>	
					</div>						
				</div>			
			</>
		)
}

export default Dashboard;
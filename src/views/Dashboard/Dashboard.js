import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { LOGO_HORUS, URL_STORAGE } from '../../config/routers/imgs/img';
import { UseData } from '../../store/UserLogin';
import '../../components/Footer/style.css';
import { HOME, LOGOUT, URL_BASE } from '../../config/routers/routes/route';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR_CONEXION, LOGOUT_WAIT } from '../../consts/msgLogin/MsgLogin';
import Loading from '../../components/Loading/Loading';

function Dashboard(){
	const _token = UseData(state => state._token);
	const userData = UseData(state => state._user);
	const userLogout = UseData(state => state.logoutUser);	
	const navigate = useNavigate();
	const endpoint = URL_BASE + LOGOUT;
	const [errorLogout, setErrorLogout] = useState(false);
	const [isLoading, setIsLoading] = useState (false);
	useEffect(()=>{
		// Modificar este useEffect para que no rederice el componente luego cierre de una vez
		// Verificar bien.
		if(_token === null){
			navigate(HOME);			
		}
	});
	const logoutChange = async (e) => {
		e.preventDefault();
		setErrorLogout(false);
		setIsLoading(true);
		//hacer logout en la API-REST de LARAVEL
		try{
			const logout = await axios.post(endpoint, {
	         email: userData.email           
		    });
		    console.log(logout.status);
	        if(logout.status === 201){
	        	//Limpia el Estado Global de la aplicación para Token y Objeto Usuario
				userLogout();
				//Borra el localStore del Navegador WEB
				localStorage.removeItem('DatosHorusUsersToken2023');
				setIsLoading(false);
	        	navigate(HOME);
			}else{
				setIsLoading(false);
				setErrorLogout(true);
			}
		}catch(error){
			setIsLoading(false);
			setErrorLogout(true);
		}		
  	}
		return(
			<>		
				<div className="auth-wrapper container hero__main">
					<div className="auth-inner">
						<center>
							<h1>DASHBOARD</h1>
							<div style={{textAlign: "center"}}>
		          				<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
		        			</div>
		        			<div>
		        				{isLoading ? <Loading msg={LOGOUT_WAIT} /> : <div></div>}
		        			</div>
		        			<p></p>
		        			<p></p>
		        			{errorLogout ? <div style={{color:"red", textAlign:"center"}}>{ ERROR_CONEXION }.</div> : <div></div>}		        			
		        			<div>
								<h3>SISTEMA HORUS</h3>
							</div>
							<div>
								<h1>USER</h1>
								<h6>AVATAR:
									<p>
										{ userData && <Image  src={URL_STORAGE+userData.avatar} 
										alt="Foto_User" style={{width: 80, height: 80, borderRadius: 80/2}} />}
									</p>
								</h6>
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
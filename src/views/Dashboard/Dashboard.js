import React from 'react';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { useUserContext, useUserToggleContext } from "../../context/UserProvider";
import '../../components/Footer/style.css';

function Dashboard(){
	const user = useUserContext();
  	const Login_Logout = useUserToggleContext();
  	console.log(user);
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
							<h3>USER:{user && <p>{user._name}</p>}</h3>
						</div>
						<button onClick={Login_Logout}>Login | Logout</button>
					</center>	
				</div>						
			</div>			
		</>
	)
}

export default Dashboard;
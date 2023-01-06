import React from 'react';
import Button from 'react-bootstrap/Button';
import { LOGO_HORUS } from '../../config/routers/imgs/img';
import { userToken } from '../../store/loginLogoutTokenStore';
import '../../components/Footer/style.css';

function Dashboard(){
	const userData = userToken();
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
							<h6>AVATAR:<p>{userData._user && userData._user.avatar}</p></h6>
							<h6>NAME:<p>{ userData._user && userData._user.name}</p></h6>
							<h6>ROLS:<p>{ userData._user && userData._user.rols_id}</p></h6>
							<h6>EMAIL:<p>{userData._user &&  userData._user.email}</p></h6>
							<Button onClick={userData.logoutUser} variant="primary" type="submit">
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
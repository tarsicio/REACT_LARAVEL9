import React from 'react';
import { LOGO_HORUS } from '../../config/routers/imgs/img';

function Dashboard(){
	return(
		<>		
			<div>
				<center>
					<h1>DASHBOARD</h1>
					<div style={{textAlign: "center"}}>
          				<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
        			</div>
				</center>	
			</div>
			<div>
				<center>
					<h3>SISTEMA HORUS</h3>
				</center>	
			</div>			
			<div>
				<center>
					<h3>USER: </h3>
				</center>	
			</div>			
		</>
	)
}

export default Dashboard;
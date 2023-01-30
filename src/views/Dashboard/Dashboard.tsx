/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Dashboard
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import Image from 'react-bootstrap/Image'
import { LOGO_HORUS, URL_STORAGE } from '../../config/imgs/imgs';
import { UseData } from '../../store/UserLogin';

function Dashboard(){	
	const userData = UseData(state => state._user);
		return(
			<section style={{textAlign: "center"}}>			
				<div className="auth-wrapper container hero__main">
					<div className="auth-inner">
						<center>
							<h1>DASHBOARD</h1>
							<div style={{textAlign: "center"}}>
		          				<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
		        			</div>		        					        			
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
							</div>													
						</center>	
					</div>						
				</div>			
			</section>
		)
}

export default Dashboard;
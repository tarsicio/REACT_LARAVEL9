/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Logout
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../../components/Header/SideBar';

function Notifications(){
	const  { t, i18n } = useTranslation();
	return(
		<div style={{padding:"1px", backgroundColor:"white"}}>
		    <Row>
		        <Col md='2'>
		            <SideBar />
		        </Col>
		        <Col md='10'>		            
					<center>		
						<div className="auth-wrapper container hero__main">
							<div className="auth-inner">
								<center>
									<h1>{t('notifications.title')}</h1>
									<div style={{textAlign: "center"}}>
					          			<img 
					          			src={ LOGO_HORUS.LogoHorus } 
					          			style={{width: 100, height: 100,}} 
					          			alt="Logo_Horus"  
					          			className="img-fluid" />
					        		</div>				
								</center>	
							</div>						
						</div>			
					</center>					
		        </Col>
		    </Row>
		</div>
	)
}

export default Notifications;

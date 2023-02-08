/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Dashboard
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import { LOGO_HORUS, URL_STORAGE } from '../../config/imgs/imgs';
import { UseData } from '../../store/UserLogin';
import SideBar from '../../components/Header/SideBar';
import { useTranslation } from 'react-i18next';

function Dashboard(){	
	const userData = UseData(state => state._user);
	const  { t, i18n } = useTranslation();
	const [sidebarOpen, setSideBarOpen] = useState(false);
  	const handleViewSidebar = () => {
    	setSideBarOpen(!sidebarOpen);
  	};	
	return(
		<div style={{padding:"1px", backgroundColor:"white"}}>
		    <Row>
		        <Col md='2'>
		            <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
		        </Col>
		        <Col md='10'>
		            <section>			
						<div className="">
							<div className="">								
								<h1 style={{textAlign:"center"}}>{t('dashboard.title')}</h1>								
					       	</div>					       	
						</div>			
					</section>
		        </Col>
		    </Row>
		</div>			
	)
}

export default Dashboard;
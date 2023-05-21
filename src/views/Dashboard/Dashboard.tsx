/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Dashboard
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LOGO_HORUS, URL_STORAGE } from '../../config/imgs/imgs';
import { userData } from '../../store/StoreDataUser';
import SideBar from '../../components/Header/SideBar';
import SideBar02 from '../../components/Header/SideBar02';
import { useTranslation } from 'react-i18next';
import Cards from '../../components/Card/Cards';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Dashboard(){	
	const _userData = userData(state => state._user);
	const  { t, i18n } = useTranslation();	
	const _sidebar = userData(state => state._sidebar);
	const [barside,setBarside] = useState(_sidebar);  
  		
	return(		
		<div style={{backgroundColor:"white"}}>
			{barside ?
			<Row>
		        <Col md='2'>		        	
		            <SideBar />
		        </Col>
		        <Col md='10'>		        	
					<h1 style={{textAlign:"center"}}>{t('dashboard.title')}</h1>
		        	<Cards />		        	
		        </Col>
		    </Row> :
			<Row>
		        <Col md='1'>		        	
		            <SideBar02 />
		        </Col>
		        <Col md='11'>		        	
					<h1 style={{textAlign:"center"}}>{t('dashboard.title')}</h1>
		        	<Cards />		        	
		        </Col>
		    </Row>}		    
		</div>			
	)
}

export default Dashboard;
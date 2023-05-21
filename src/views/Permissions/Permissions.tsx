/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Logout
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React, { useState } from 'react';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import SideBar from '../../components/Header/SideBar';
import SideBar02 from '../../components/Header/SideBar02';
import Permission from './Permission';
import { userData } from '../../store/StoreDataUser';

function Permissions(){
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
		        	<Permission />
		        </Col>
		    </Row> :
			<Row>
		        <Col md='1'>		        	
		            <SideBar02 />
		        </Col>
		        <Col md='11'>					
		        	<Permission />
		        </Col>
		    </Row>}		    
		</div>
	)
}

export default Permissions;

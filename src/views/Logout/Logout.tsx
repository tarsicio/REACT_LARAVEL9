/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Logout
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 * El presente componente permite cerrar el la sección del usuario
 * forma global con  la libreria Zustand, la cual
 * puede ser usada desde cualquier parte de la aplicación sin problema
 * también los datos se guardan en el LocalStorage, una vez haga Logout
 * se borran todos los datos globales y el LocalStorage, también cierra
 * el sección en la API de Laravel 9
 */

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../../components/Header/SideBar';
import SideBar02 from '../../components/Header/SideBar02';
import { UseData } from '../../store/UserLogin';
import Exit from './Exit';

function Logout(){
	
	const _sidebar = UseData(state => state._sidebar);
	const [barside,setBarside] = useState(_sidebar);  

	return(
		<div style={{backgroundColor:"white"}}>
			{barside ?
			<Row>
		        <Col md='2'>		        	
		            <SideBar />
		        </Col>
		        <Col md='10'>					
		        	<Exit />
		        </Col>
		    </Row> :
			<Row>
		        <Col md='1'>		        	
		            <SideBar02 />
		        </Col>
		        <Col md='11'>		        						
		        	<Exit />		        	
		        </Col>
		    </Row>}		    
		</div>
	)
}

export default Logout;
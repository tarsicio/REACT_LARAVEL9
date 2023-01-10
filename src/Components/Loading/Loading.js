/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Loading
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loading.css';

function Loading(props){
	return(
		<div className="divPadre">
			<div className="divHijo">
				<Spinner color="primary" />
					<div style={{color:"red"}}>
						{props.msg}
					</div>
			</div>	
		</div>
	)
}

export default Loading;
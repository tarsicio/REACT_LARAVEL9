import React from 'react';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loading.css';

function Loading(){
	return(
		<div className="divPadre">
			<div className="divHijo">
				<Spinner color="primary" />
					<div>
						Validate .... Please wait
					</div>
			</div>	
		</div>
	)
}

export default Loading;
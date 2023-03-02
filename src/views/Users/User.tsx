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
import { Container } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

function User(){
	const  { t, i18n } = useTranslation();
	const columns = [
	    {
	        name: 'Name',
	        selector: row => row.title,
	    },
	    {
	        name: 'Year',
	        selector: row => row.year,
	    },
	    {
	        name: 'Country',
	        selector: row => row.country,
	    },
	];

	const data = [
	    {
	        id: 1,
	        title: 'Tarsicio',
	        year: '1963',
	        country: 'Venezuela',
	    },
	    {
	        id: 2,
	        title: 'Ghostbusters',
	        year: '1984',
	        country: 'USA',
	    },
	    {
	        id: 3,
	        title: 'Elena',
	        year: '1972',
	        country: 'Venezuela',
	    },
	    {
	        id: 4,
	        title: 'Gael',
	        year: '2018',
	        country: 'Germany',
	    },
	]
	return(		
		<div className="auth-wrapper container hero__main">
			<div className="auth-inner">
				<center>
					<h1>{t('users.title')}</h1>						
					<div style={{textAlign: "center"}}>
					    <img 
					        src={ LOGO_HORUS.LogoHorus } 
					        style={{width: 100, height: 100,}} 
					        alt="Logo_Horus"  
					        className="img-fluid" />
					</div>
					<div>
						<DataTable columns={columns} data={data} selectableRows />
			        </div>			
			    </center>	
			</div>						
		</div>						
	)
}

export default User;

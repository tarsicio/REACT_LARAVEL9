/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Dashboard
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';

function NoFound404(props) {
	const  { t, i18n } = useTranslation();
    return (
    	<section>
        	<div className="auth-wrapper container hero__main">
				<div className="auth-inner">
					<center>
						<h2>{t('page.404.title')}</h2>
						<div style={{textAlign: "center"}}>
		          			<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
		        		</div>		        					        			
		        		<div>
							<h3>{t('horus.title')}</h3>
                            <h5>{props.msg}</h5>
						</div>														
					</center>	
				</div>						
			</div>
		</section>		
    );
}

export default NoFound404;
/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Logout
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 * 
 */
import { LOGO_HORUS } from '../../config/imgs/imgs';
import { useTranslation } from 'react-i18next';

function MsgRegistro(){
	const  { t, i18n } = useTranslation();
	return(
		<section>		
			<div className="auth-wrapper container hero__main">
				<div className="auth-inner">
					<center>
						<h1>{t('welcome.title')}</h1>
						<div>
							<h3>{t('welcome.subtitle')}</h3>
						</div>
						<div style={{textAlign: "center"}}>
		          			<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
		        		</div>
		        		<div>
		        			<h6>{t('welcome.msg')}</h6>
		        		</div>		        		
					</center>	
				</div>						
			</div>			
		</section>
	)
}

export default MsgRegistro;
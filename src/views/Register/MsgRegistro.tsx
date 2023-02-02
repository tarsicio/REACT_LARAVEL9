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
import { MSG_BIENVENIDA } from '../../config/label/labelES';

function MsgRegistro(){	
	return(
		<>		
			<div className="auth-wrapper container hero__main">
				<div className="auth-inner">
					<center>
						<h1>BIENVENIDO</h1>
						<div>
							<h3>SISTEMA HORUS | 2023</h3>
						</div>
						<div style={{textAlign: "center"}}>
		          			<img src={ LOGO_HORUS.LogoHorus } style={{width: 100, height: 100,}} alt="Logo_Horus"  className="img-fluid" />
		        		</div>
		        		<div>
		        			<h6>{ MSG_BIENVENIDA }</h6>
		        		</div>		        		
					</center>	
				</div>						
			</div>			
		</>
	)
}

export default MsgRegistro;
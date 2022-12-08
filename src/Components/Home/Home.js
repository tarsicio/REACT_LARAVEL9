import React from 'react';
import LogoHorus from '../../assets/img/horus.png';

function Home(){
	return(
		<>		
			<div>
				<center>
					<h1>SISTEMA HORUS</h1>
					<div style={{textAlign: "center"}}>
          				<img src={LogoHorus} style={{width: 100, height: 100,}} alt="Logo_Post"  className="img-fluid" />
        			</div>
				</center>	
			</div>
			<div>
				<center>
					<h3>VERSIÓN 3.0</h3>
				</center>	
			</div>			
			<div>
				<center>
					<h3>Año 2023</h3>
				</center>	
			</div>			
		</>
	)
}

export default Home;
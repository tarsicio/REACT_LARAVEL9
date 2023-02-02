/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Reloj
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import { useEffect, useRef } from "react";

function Reloj02() {  
  const horario = () => {
    const tiempo = new Date();
    const hora = tiempo.getHours();
    const minuto = tiempo.getMinutes();
    const segundo = tiempo.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
  };
  const h1Ref = useRef();
  <h2 ref={h1Ref}>{horario()}</h2>
  const fecha = () => {
    return Date();
  };
  useEffect(() => {
    const cl = setInterval(() => {
      h1Ref.current.innerHTML = `Time | Hora: ${horario()}`;      
    }, 1000);
    return () => clearInterval(cl);
  }, []);  
  return (
    <div style={{padding:15, textAlign: "center"}}>      
      <h2 ref={h2Ref}>{fecha()}</h2>     
    </div>
  );
}

export default Reloj02;
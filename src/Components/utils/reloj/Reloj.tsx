/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Reloj
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import { useEffect, useRef } from "react";

function Reloj() {
  const h2Ref = useRef();
  const fecha = () => {
    return Date();
  };
  useEffect(() => {
    const cl = setInterval(() => {      
      h2Ref.current.innerHTML = `${fecha()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);  
  return (
    <div style={{padding:15, textAlign: "center"}}>      
      <h2 ref={h2Ref}>{fecha()}</h2>     
    </div>
  );
}

export default Reloj;
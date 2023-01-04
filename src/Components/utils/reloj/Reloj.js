import { useEffect, useRef } from "react";

function Reloj() {
  //const h1Ref = useRef();
  //<h2 ref={h1Ref}>{horario()}</h2>, colocar esta etiqueta en el lugas mas apropiado     
  const h2Ref = useRef();
  /*const horario = () => {
    const tiempo = new Date();
    const hora = tiempo.getHours();
    const minuto = tiempo.getMinutes();
    const segundo = tiempo.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
  };*/
  const fecha = () => {
    return Date();
  };
  useEffect(() => {
    const cl = setInterval(() => {
      //h1Ref.current.innerHTML = `Time | Hora: ${horario()}`;
      h2Ref.current.innerHTML = `${fecha()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);  
  return (
    <div className="App" style={{padding:30}}>      
      <h2 ref={h2Ref}>{fecha()}</h2>     
    </div>
  );
}

export default Reloj;
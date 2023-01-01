import { useEffect, useRef } from "react";

function Reloj() {
  const h1 = useRef();
  const ti = () => {
    const fechahora = new Date();
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
  };
  useEffect(() => {
    const cl = setInterval(() => {
      h1.current.innerHTML = `Time | Hora: ${ti()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);
  return (
    <div className="App" style={{padding:30}}>
      <h1 ref={h1}>{ti()}</h1>
      <h2>Venezuela</h2>     
    </div>
  );
}

export default Reloj;
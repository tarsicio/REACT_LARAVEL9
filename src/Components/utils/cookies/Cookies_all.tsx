/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Reloj
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import { useEffect } from "react";
import Cookies from 'universal-cookie';
import { UseData } from '../../../store/UserLogin';

function Cookies_all() {
  const _XSRFTOKEN = UseData(state => state.setXSRFTOKEN);
  const cookies = new Cookies();

  function getCookies(){
    const xsrfToken = cookies.get('XSRF-TOKEN');    
    _XSRFTOKEN(xsrfToken);
  }

  useEffect(()=>{
    getCookies();
  },[]);
  return (
    <></>
    );
}

export default Cookies_all;
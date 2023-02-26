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
import { URL_BASE } from '../../../config/rutas/rutas';
import axios from 'axios';

function Cookies_all() {

  const _XSRFTOKEN = UseData(state => state.setXSRFTOKEN);
  const cookies_all = new Cookies();

  const cookies = axios.create({
    baseURL: URL_BASE,
    headers:{ 
      'X-Requested-With':'XMLHttpRequest',
    },
    withCredentials: true
  });

  async function getCookies_all(){    
    const csrf = await cookies.get('/sanctum/csrf-cookie');
  }  

  function setToken(){
    const xsrfToken = cookies_all.get('XSRF-TOKEN');    
    _XSRFTOKEN(xsrfToken);
  }

  useEffect(()=>{
    getCookies_all();
    setToken();    
  },[]);
  return (
    <></>
    );
}

export default Cookies_all;
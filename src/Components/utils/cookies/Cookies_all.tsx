/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Reloj
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import { userData } from '../../../store/StoreDataUser';
import { URL_BASE } from '../../../config/rutas/rutas';
import axios from 'axios';
import ButtonLoading from '../../Loading/ButtonLoading';
import { useTranslation } from 'react-i18next';

function Cookies_all() {

  const _XSRFTOKEN = userData(state => state.setXSRFTOKEN); 
  const cookies_all = new Cookies();
  //Cargando Loading
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const  { t, i18n } = useTranslation();

  const cookies = axios.create({
    baseURL: URL_BASE,
    headers:{ 
      'X-Requested-With':'XMLHttpRequest',
    },
    withCredentials: true
  });

  async function getCookies_all(){    
    const csrf = await cookies.get('/sanctum/csrf-cookie');    
    const xsrfToken = await cookies_all.get('XSRF-TOKEN');    
    _XSRFTOKEN(xsrfToken);    
    setIsLoading(false);    
  }  

  useEffect(()=>{
    setIsLoading(true);
    getCookies_all();
  },[]);
  return (
    <div>{ isLoading ? <ButtonLoading msg={t('home.initializing.wait')} /> : ''} </div>
    );
}

export default Cookies_all;
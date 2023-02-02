/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Main
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';
import Footer from './components/Footer/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Footer/style.css';
import Routers from './components/Routers/Routers';

function Base() {  
  return (
    <div>
      <Routers />
      <Footer /> 
    </div>
  ); 
}

export default Base;
/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Mensajes
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import React from 'react';

const ValidacionesError = (props) => {
  const { obj } = props;
  if (obj) {
    let keys = Object.keys(obj);
    return (
      <ul>
        {keys.forEach(function (key) {
          return <li>{obj[key]}: {obj[key][0]}</li>
        })}
      </ul>
    );
  }
  return null;
};
export default ValidacionesError;              
            
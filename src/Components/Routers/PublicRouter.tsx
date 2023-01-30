/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Public
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import { Navigate } from 'react-router-dom';
import { DASHBOARD } from '../../config/rutas/rutas';

export default function PublicRouter({ token,children }){
return token !== null ? <Navigate to={DASHBOARD} /> : children; }
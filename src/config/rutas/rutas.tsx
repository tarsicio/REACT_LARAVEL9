/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function Rutas_Varias
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */
// URL BASE ENDPOIND
export const URL_BASE         = 'http://localhost:8000/api/v1'; 

// URL RAIZ
export const HOME             = '/';

// URL LOGIN LOGOUT
export const LOGIN            = '/login';
export const LOGOUT           = '/logout';

// URL REGISTER
export const REGISTER         = '/register';
export const CONFIRM          = '/register/confirm/:confirmation_code';

// URL RECOVERY Y RESET PASSWORD
export const REQUEST_PASSWORD = '/recovery/password';
export const SEND_MAIL        = '/reset';
export const RESET_PASSWORD   = '/password/reset/:reset_password';
export const PASSWORD_RESET   = '/password/reset/';

// URL BIENVENIDA
export const BIENVENIDO       = '/bienvenido';

// URL DASHBOARD
export const DASHBOARD        = '/dashboard';


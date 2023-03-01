/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function UseData
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import { create } from 'zustand';
import { persist } from "zustand/middleware"


let userData = (set) =>  ({
    _token: null,
    _tokenType: null,
    _XSRFTOKEN: null,
    _user: {},
    _lng: 'es',
    _sidebar: true,
    setToken: (value) => set(state => ({ _token: value })),
    setTokenType: (value) => set(state => ({ _tokenType: value })),
    setXSRFTOKEN: (value) => set(state => ({ _XSRFTOKEN: value })),
    setUser: (value) => set(state => ({ _user: value })),
    setLng: (value) => set(state => ({ _lng: value })),
    setSidebar: (value) => set(state => ({ _sidebar: value })),
    logoutUser: () =>{
        set(state =>({
            ...state,
            _token: null,
            _tokenType: null,
            _XSRFTOKEN: null,
            _user: {},
            _lng: 'es',
            _sidebar: true
        }),true)
    },
})

// Persistiendo la data en el Local Storage del Navegador
userData = persist(userData, {name: "DatosHorusUsersToken2023"})
// create the userData
export const UseData = create(userData);
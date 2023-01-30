/**
 * @name HORUS | 2023
 * @version 3.0.0 
 * @function UseData
 * @author Tarsicio Carrizales <telecom.com.ve@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Tarsicio Carrizales
 */

import create from 'zustand';
import { persist } from "zustand/middleware"


let userData = (set) =>  ({
    _token:     null,       
    _user:      {},    
    setToken: (value) => set(state => ({ _token: value })),
    setUser: (value) => set(state => ({ _user: value })),
    logoutUser: () =>{
        set(state =>({
            ...state,
            _token:null,
            _user:{}
        }),true)
    },
})

// Persistiendo la data en el Local Storage del Navegador
userData = persist(userData, {name: "DatosHorusUsersToken2023"})
// create the userData
export const UseData = create(userData);
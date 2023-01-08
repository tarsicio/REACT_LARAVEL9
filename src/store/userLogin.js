import create from 'zustand';
import {persist} from "zustand/middleware"

// Persistiendo da data en el Local Storage del Navegador
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

// persist the created state
userData = persist(userData, {name: "DatosHorusUsersToken2023"})
// create the store
export const UseData = create(userData);
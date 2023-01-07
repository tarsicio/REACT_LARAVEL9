import create from 'zustand';
import {persist} from "zustand/middleware"

/*
export const useData = create((set,get) => ({
	_token:     null,   	
   	_user: 		{},    
    setToken: (value) => set(state => ({ _token: value })),
    setUser: (value) => set(state => ({ _user: value })),
    logoutUser: () =>{set({},true)},
}));
*/
// Persistiendo da data en el Local Storage del Navegador
let userData = (set) =>  ({
    _token:     null,       
    _user:      {},    
    setToken: (value) => set(state => ({ _token: value })),
    setUser: (value) => set(state => ({ _user: value })),
    logoutUser: () =>{set({},true)},
})

// persist the created state
userData = persist(userData, {name: "DatosHorusUsersToken2023"})
// create the store
export const useData = create(userData);
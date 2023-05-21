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

interface GenerateUserData {
    _token: string
    _tokenType: string
    _XSRFTOKEN: string
    _user: object
    _lng: string
    _sidebar: boolean
    setToken: (value: string) => void
    setTokenType: (value: string) => void
    setXSRFTOKEN: (value: string) => void
    setUser: (value: object) => void
    setLng: (value: string) => void
    setSidebar: (value: boolean) => void
    logoutUser : () => void
}

export const userData = create(
    persist<GenerateUserData>((set) => ({
    _token: null,
    _tokenType: null,
    _XSRFTOKEN: null,
    _user: {},
    _lng: 'es',
    _sidebar: true,
    setToken: (value: string) => set(state => ({ _token: value })),
    setTokenType: (value: string) => set(state => ({ _tokenType: value })),
    setXSRFTOKEN: (value: string) => set(state => ({ _XSRFTOKEN: value })),
    setUser: (value: object) => set(state => ({ _user: value })),
    setLng: (value: string) => set(state => ({ _lng: value })),
    setSidebar: (value: boolean) => set(state => ({ _sidebar: value })),
    logoutUser: () => {
        set(state =>({
            ...state,
            _token: null,
            _tokenType: null,
            _XSRFTOKEN: null,
            _user: {},
            _lng: 'es',
            _sidebar: true
        }),true)
    }
    }),
        {
            name: 'DatosHorusUsersToken2023',
        }
    )
)
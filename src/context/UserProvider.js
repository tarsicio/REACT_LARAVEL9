import React, { useState, useContext } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function UserProvider(props) {
    const [user, setUser] = useState(null);

    const cambiaLogin = () => {
        if (user) {
            setUser({
                _token:     null,
                _name:      null,
                _mail:      null,
                _avatarUrl: null,
            });
        } else {
            setUser({
                _token:     null,
                _name:      null,
                _mail:      null,
                _avatarUrl: null,
            });
        }
    }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}
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

    const Login_Logout = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                _token:     null,
                _name:      "Tarsicio Carrizales",
                _mail:      null,
                _avatarUrl: null,
            });
        }
    }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={Login_Logout}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}
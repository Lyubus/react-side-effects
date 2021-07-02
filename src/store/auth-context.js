import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isUserLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

        if (isUserLoggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
        {props.children}
    </AuthContext.Provider>;
};

export default AuthContext;
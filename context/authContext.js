import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthencated, setIsAuthencated] = useState(undefined);

    useEffect(() => {
            setIsAuthencated(false);
    }, [])

    const login = async (email, password) => {
        try {

        } catch (error) {

        }
    }
    const register = async (email, password, username, profileUrl) => {
        try {

        } catch (error) {

        }
    }

    const logout = async () => {
        try {

        } catch (error) {

        }
    }
    return (
        <AuthContext.Provider value={{ user, isAuthencated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider')
    }
    return value;
}
import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signin =  async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            await setErrors(error.response.data)
            console.log(errors)
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errors]);

    useEffect(() => {
        const cookies = Cookies.get()
        console.log(cookies)
        if (cookies.token) {
            console.log(cookies.token)
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            signin,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}
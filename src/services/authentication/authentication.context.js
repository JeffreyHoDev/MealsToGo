import { useState, createContext } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

import { loginRequest } from "./authentication.service";

const firebaseConfig = {
    apiKey: "AIzaSyC-u-4nmnNivq39wrw6oi5ZHFEj2yAfct0",
    authDomain: "mealstogo-dffeb.firebaseapp.com",
    projectId: "mealstogo-dffeb",
    storageBucket: "mealstogo-dffeb.appspot.com",
    messagingSenderId: "287389777557",
    appId: "1:287389777557:web:c1fe9062da8fc4916e659c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isAuthenticated, setIsAuthenticated] = useState(false)

    const onLogin = (email, password) => {
        loginRequest(auth, email, password)
        .then((user) => {
            setIsLoading(true)
            setUser(user)
            setIsLoading(false)
        })
        .catch(err => {
            setError(err)
            setIsLoading(false)
        })
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                isAuthenticated
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}
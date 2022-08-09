import { createContext } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const userLogout = () => {
        setAuth({});
    }

    const userEdit = (username, email, firstName, lastName, imageUrl) => {
        setAuth({...auth, username, email, firstName, lastName, imageUrl}); //state => state.map(u => u.objectId === userId ? userData : u));
    }

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout, isAuthenticated: !!auth.accessToken, userEdit }}>
            {children}
        </AuthContext.Provider>
    );
};

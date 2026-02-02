import React, { createContext, useContext, ReactNode } from 'react';
import { UserDTO } from '@/dto/UserDTO';

type AuthContextData = {
    handleLogin: (data?: any) => void;
    handleLogout: () => void;
    userData: UserDTO | null;
    isLogged: boolean;
    needsPassword: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
    handleLogin: (data?: any) => void;
    handleLogout: () => void;
    userData: UserDTO | null;
    isLogged: boolean;
    needsPassword: boolean;
};


const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children, handleLogin, handleLogout, userData, isLogged, needsPassword }: AuthProviderProps) => {
    return (
        <AuthContext.Provider value={{ handleLogin, handleLogout, userData, isLogged, needsPassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";

interface AuthContext {
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthCtx = createContext<AuthContext>(null!);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        setLoading(false);
    },[token]);

    const login = async (email: string, password: string) => {
        const {data} = await api.post("/login", {email, password});
        localStorage.setItem("token", data.token);
        setToken(data.token);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        delete api.defaults.headers.common["Authorization"];
    }

    return (
        <AuthCtx.Provider value={{token, login, logout, loading}}>
            {children}
        </AuthCtx.Provider>
    )
}

export const useAuth = () => useContext(AuthCtx);
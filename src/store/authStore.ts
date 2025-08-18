import {create} from "zustand";

interface AuthStore {
    token: string | null;
    setToken: (t: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    token: localStorage.getItem("token"),
    setToken: (t) => {
        localStorage.setItem("token", t);
        set({token: t});
    },
    logout: () => {
        localStorage.removeItem("token");
        set({token: null});
    }
}));
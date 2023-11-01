import { createContext, useContext, useState } from "react";
import { supabase } from "../App";
import { useEffect } from "react";
import { childrenProps } from "../styles/types";

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: childrenProps) => {
  const [currentUser, setCurrentUser] = useState<null | any>(null);

  function loginWithPassword(password: string, email: string) {
    return supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  const value = {
    loginWithPassword,
    currentUser,
    setCurrentUser,
  };
  useEffect(() => {
    const unsubscribe = () => {
      supabase.auth.onAuthStateChange((_, session) => {
        setCurrentUser(session?.user ?? null);
        session?.user &&
          localStorage.setItem(
            "admin_tk",
            (import.meta as any).env.VITE_ADMIN_KEY as string
          );
      });
    };
    return unsubscribe();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

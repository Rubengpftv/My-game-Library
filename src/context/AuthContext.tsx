import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (username: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  function login(email: string, password: string): boolean {
    if (email.trim() !== "detective@libga-pd.com" || password !== "libga123") {
      return false;
    }

    // Comprobamos las credenciales mock.
    setUser({
      username: "Detective Principal",
      email,
    });

    return true;
  }

  function register(
    username: string,
    email: string,
    password: string,
  ): boolean {
    if (!username.trim() || !email.trim() || !password.trim()) {
      return false;
    }

    // El registro simulado inicia sesión directamente.
    setUser({
      username,
      email,
    });

    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe utilizarse dentro de AuthProvider");
  }

  return context;
}

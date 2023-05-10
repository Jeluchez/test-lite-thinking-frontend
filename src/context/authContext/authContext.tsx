import React, { createContext, useContext } from 'react'

interface AuthContextValue {
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false
})

export const useAuth = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)

  const value = React.useMemo(() => ({ isAuthenticated }), [isAuthenticated])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

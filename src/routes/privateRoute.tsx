import React from 'react'
import { Navigate } from 'react-router-dom'
// import { useAuth } from 'context/authContext/authContext'

interface Props {
  element: React.ComponentType
}

const PrivateRoute: React.FC<Props> = ({ element: Component }) => {
  // const { isAuthenticated } = useAuth()
  const isAuthenticated = true

  return isAuthenticated ? <Component /> : <Navigate to='/login' replace />
}

export default PrivateRoute

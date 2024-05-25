import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"


function ProtectedRoute() {

    const {user, isAuthenticated} = useAuth()

    if (!isAuthenticated) return <Navigate to='/' replace />


  return <Outlet />
}

export default ProtectedRoute
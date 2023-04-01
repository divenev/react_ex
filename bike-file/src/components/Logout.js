import { useContext, useEffect } from "react"
import { LogoutUser } from "../services/logoutUser"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

export const Logout = () => {  
    const navigate = useNavigate()
    const { updateUser } = useContext(UserContext) 

    useEffect(() => {
        LogoutUser()
        localStorage.removeItem('userData')
        updateUser()
        navigate('/')       
    }, [navigate, updateUser])
}
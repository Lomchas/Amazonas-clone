import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children, isAuth }) => {

    return (
            isAuth
            ? children
            : <Navigate to='/' />
    )
}

export default PrivateRoutes
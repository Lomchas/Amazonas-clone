import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({ children, isAuth }) => {
  return (

      !isAuth
      ?
      children
      :
      <Navigate to='/*' />
  )
}

export default PublicRoutes
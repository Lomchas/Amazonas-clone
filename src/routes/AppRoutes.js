import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import PublicRoutes from './PublicRoutes'
import Register from '../components/Register/Register'
import DashBoardRoutes from './DashBoardRoutes'
import PrivateRoutes from './PrivateRoutes'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
    })
  }, [ setIsLoggedIn])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PublicRoutes isAuth={isLoggedIn}>
            <Login />
          </PublicRoutes>
        } />
        <Route path='/register' element={
          <PublicRoutes isAuth={isLoggedIn}>
            <Register />
          </PublicRoutes>
        } />
        <Route path='/*' element={
          <PrivateRoutes isAuth={isLoggedIn}>
            <DashBoardRoutes />
          </PrivateRoutes>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
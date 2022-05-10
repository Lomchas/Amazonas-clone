import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../components/App/container/App'
import Add from '../components/CRUD/Add'
import DetalleItem from '../components/DetalleItem/Detalle_item'

const DashBoardRoutes = () => {
  return (
      <Routes>
        <Route path='/*' element={<App/>}/>
        <Route path='/agregar' element={<Add/>}/>
        <Route path='/detalle/:id' element={<DetalleItem/>}/>
      </Routes>
    )
}

export default DashBoardRoutes
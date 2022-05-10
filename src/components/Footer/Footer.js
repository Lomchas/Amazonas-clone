import React from 'react'
import './footer.css'
import { GrAmazon } from "react-icons/gr";


const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='items-footer'>
            <ul className='list-knowUs list'>
                <li className='title-list'>Conocenos</li>
                <li>Trabaja en Amazonas</li>
                <li>Informacion corporativa</li>
                <li>Departamento de prensa</li>
            </ul>
            <ul className='list-2 list'>
                <li className='title-list'>Gana dinero con nosotros</li>
                <li>Vende en Amazonas</li>
                <li>Vender en Amazonas Handmade</li>
                <li>Publica tu libro en kindle</li>
                <li>Programa de afiliados</li>
                <li>Anuncia tus productos</li>
            </ul>
            <ul className='list-3 list' >
                <li className='title-list'>Podemos ayudarte</li>
                <li>Amazonas y COVID-19</li>
                <li>Devolver o reemplazar productos</li>
                <li>Gestionar contenido y dispositivos</li>
                <li>Ayuda</li>
            </ul>
            <ul className='list-4 list'>
                <li className='title-list'>Metodos de pago</li>
                <li>Tarjetas de credito o debito</li>
                <li>Tarjetas de regalo</li>
                <li>Meses sin interes</li>
                <li>Amazonas cash</li>
                <li>Amazonas recargable</li>
            </ul>
        </div>
        <div className='logo-footer'>
            <GrAmazon/>
        </div>
    </div>
  )
}

export default Footer
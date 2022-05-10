import React from 'react'
import { Link } from 'react-router-dom'
import iconBars from '../../images/menu.png'

const Filters = () => {
  return (
    <div className='container-filtrados'>
        <div className='container-iconBars'>
            <label htmlFor='bars'>
                <img src={iconBars} alt='bars'/>
                <input type='checkbox' id='bars'/>
            </label>
            <p>Todo</p>
        </div>
        <div className='container-othersFilters'>
            <ul>
                <li>Tarjetas de regalo</li>
                <li>Prime</li>
                <li>Los mas Vendido</li>
                <li>AmazonBasics</li>
                <li>Computo y tabletas</li>
                <li>Lo mas regalado</li>
                <li><Link to='/agregar' className='agragar-producto-list'>Agregar producto a la venda</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Filters
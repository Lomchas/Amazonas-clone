import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'


const Cards = ({ data, añadirCarrito }) => {
    return (
        <div className='container-card'>
            <Link className='link' to='/detalle/:id'>
                <div className='container-image-card'>
                    <img src={data ? data.image1 : 'https://gamestorecolombia.com/files/images/thumbs/productos_300x400_1649956931-cyberpunk-2077-ps4-0.jpg'} alt='item' />
                </div>
                <div className='container-info-card'>
                    <h2 className='card-name'>{data ? data.nombre : 'CyberPunk standard edition - PlayStation 4'}</h2>
                    <p className='price-article'>{data ? data.precio : '230.000$'}</p>
                </div>
                <div className='container-actions-btn'>
                    <button type='button' className='btn-add-car' id={data.id} onClick={añadirCarrito}>Añadir</button>
                </div>
            </Link>
        </div>
    )
}

export default Cards
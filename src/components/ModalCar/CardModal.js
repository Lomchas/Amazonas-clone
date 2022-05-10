import React from 'react'
import './cardModal.css'

import { FaTrash } from "react-icons/fa";

const CardModal = ({ article }) => {


    return (
        <div className='container-card-modal'>
            <div className='picture-card-modal'>
                <center>
                    <img src={article ? article.image1 : 'https://gamestorecolombia.com/files/images/thumbs/productos_300x400_1649956931-cyberpunk-2077-ps4-0.jpg'} alt='product' />
                </center>
            </div>
            <div className='info-card-modal'>
                <h5>{article ? article.nombre : 'CyberPunk standard edition - PlayStation 4'}</h5>
                <p>{article ? article.precio : '230.000$'}</p>
            </div>
            <div className='container-eliminar'>
                <button type='button'>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default CardModal
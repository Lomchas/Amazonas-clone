import React from 'react'
import './detalle_item.css'
import { BiArrowBack } from "react-icons/bi";



const DetalleItem = () => {
    return (
        <div className='container-detalle_item'>
            <div className='container-back-action'>
                <button type='button'>
                    <BiArrowBack />
                </button>
            </div>
            <div className='item-detalle'>
                <div className='container-gallery'>
                    <img src='#' alt='img1' />
                    <img src='#' alt='img1' />
                    <img src='#' alt='img1' />
                </div>
                <div className='container-big-picture'>
                    <img src='#' alt='img-big' />
                </div>
                <div className='container-all-info-article'>
                    <h1 className='article-title'>title</h1>
                    <p className='article-marca'>Marca: <span>nombre marca</span></p>
                    <hr />
                    <p className='precio-article'><span>0</span></p>
                    <p>Hasta 18 meses sin intereses de $5,592.76. Ver mensualidades
                        Solicita tu tarjeta Amazon Recargable y obtén $100 de descuento en tu primera compra mayor a $500</p>
                    <p className='color-article'>Color: {''}<span>black</span></p>
                    <p className='Propieties-article'>Estilo: {''}<span>canon 8g5rr</span></p>
                    <br/>
                    <h2 className='title-about-article'>Acerca de este articulo</h2>
                    <div className='info-article'>
                        
                    </div>


                </div>
            </div>

        </div>
    )
}

export default DetalleItem
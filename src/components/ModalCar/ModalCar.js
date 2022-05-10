import React, { useEffect, useState } from 'react'
import './modalCar.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import ilustration from '../../images/ilustracion-noProducts.png'
import CardModal from './CardModal';
import { useDispatch, useSelector } from 'react-redux';
import { actionListAsync } from '../../Redux/Actions/actionArticles';


const ModalCar = ({ isActive }) => {
    const dispatch = useDispatch()
    const { car } = useSelector(store => store.car)

    const [totalAPagar, setTotalAPagar] = useState(0)

    const salirModal = () => {
        isActive(false)
    }

    const salirModalSpecial = ({ target }) => {
        const clase = target.className;
        if (clase === 'container-modal') {
            isActive(false)
        }
    }

   useEffect(() => {
     console.log(car.length)
   }, [car])

   useEffect(() => {
     dispatch(actionListAsync())
   }, [dispatch])
   
   

    return (
        <div className='container-modal' onClick={salirModalSpecial}>
            <div className='modal-item'>
                <div className='header-car'>
                    <h2>Carrito de Compras {''}<span className='numero-productos'>0</span></h2>
                    <AiOutlineCloseCircle className='icon-salir' onClick={salirModal} />
                </div>
                <hr />
                <div className='body-car'>
                    {
                        car.length === 0
                            ?
                            <div className='container-noProducts'>
                                <img src={ilustration} alt='Carrito vacio...' />
                                <button type='button' className='btn-add-product-modal' onClick={salirModal}>Añadir productos al Carrito</button>
                            </div>
                            :
                            <div className='container-products'>
                                {
                                    car?.map((article, index) => (
                                        <CardModal article={article} key={index} />
                                    ))
                                }
                            </div>
                    }

                </div>
                <hr />
                <div className='footer-car'>
                    <div className='container-info-purchase'>
                        <button className='btn-pagar'>Pagar</button>
                        <p className='total-pay'>Total: <span className='total-a-pagar'>{totalAPagar ? totalAPagar : '0'}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCar
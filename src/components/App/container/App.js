import React, { useEffect, useState } from 'react';
import loader from '../../../images/loader.gif'
import NavBar from '../../Nav/NavBar'
import '../../../styles/App.css';
import Footer from '../../Footer/Footer';
import Listar from '../../pruductos/Listar';
import ModalCar from '../../ModalCar/ModalCar';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddCarAsync } from '../../../Redux/Actions/actionCar';


const App = () => {
  const dispatch = useDispatch()
  const [Loading, setLoading] = useState(true)
  const [activeModalCar, setActiveModalCar] = useState(false)

  const {articles} = useSelector(store => store.articles)

  const añadirCarrito = ({target}) => {
    const id = target.id;
    const coinciden = articles.find(article => article.id === id)
    console.log(coinciden)
    dispatch(actionAddCarAsync(coinciden))
    
}

  console.log(articles)

  const loaderStateController = () => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }
  useEffect(() => {
    loaderStateController()
  }, [articles])


  if (Loading) {
    return (
      <div className='container-loading'>
        <img src={loader} alt='cargando...' />
      </div>
    )
  } else {
    return (

      <div className="App">
        <NavBar isActive={setActiveModalCar} />
        {
          activeModalCar
            ? <ModalCar isActive={setActiveModalCar} />
            : ''
        }
        <Listar functionAñadir={añadirCarrito}/>
        <Footer />
      </div>
    )
  }

}

export default App
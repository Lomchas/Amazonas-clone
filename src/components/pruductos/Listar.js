import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionListAsync } from '../../Redux/Actions/actionArticles'
import Cards from './Cards'
import './listar.css'


const Listar = ({functionAñadir}) => {
  const dispatch = useDispatch()
  const { articles } = useSelector(store => store.articles)

  console.log(articles)
  useEffect(() => {
    dispatch(actionListAsync())
  }, [dispatch])

  return (
    <div className='container-all-products'>
      {
        articles.map((article, index) => <Cards key={index} añadirCarrito={functionAñadir} data={article}/>)
      }
    </div>
  )
}

export default Listar
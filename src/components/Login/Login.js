import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import logoAmazonas from '../../images/logo-amazon.png'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from '../../Hooks/UseForm';
import { actionLoginEmailYPassAsync, facebookAsync, googleAsync } from '../../Redux/Actions/actionLogin';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValue


  const onGoogle = () => {
    dispatch(googleAsync())
  }

  const onFacebook = () => {
    dispatch(facebookAsync())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email.length === 0 || password.length === 0){
      Swal.fire({
        icon: 'Opps',
        title: 'Hay campos vacios!',
        text: 'Debes rellenar cada uno de los campos...',
      })
    }else{
      console.log(email, password)
      dispatch(actionLoginEmailYPassAsync(email, password))
      reset()
    }
  }

  return (
    <div className="container-login">
      <Link to='/'>
        <img src={logoAmazonas} alt="" className="logo" />
      </Link>
      <div className="item-login">
        <h1>Inicio Sesion</h1>
        <form onSubmit={handleSubmit}>
          <h5>Correo</h5>
          <input type='text' name='email' value={email} onChange={handleInputChange} />
          <h5>Contraseña</h5>
          <input type='password' name='password' value={password} onChange={handleInputChange} autoComplete='none' />

          <button className='button-login' type='submit'>Iniciar Sesion</button>
        </form>
        <p>Al iniciar sesión, acepta las Condiciones de uso y venta de AMAZON FAKE CLONE. Por favor
          consulte nuestro Aviso de Privacidad, nuestro Aviso de Cookies y nuestro Aviso de Anuncios Basados ​​en Intereses.
        </p>
        <div className='container-btn-auth'>
          <button type='button' className='btn-facebook' onClick={onFacebook}>
            <FaFacebook />
          </button>
          <button type='button' className='btn-google' onClick={onGoogle}>
            <FcGoogle />
          </button>
        </div>
        <button className='button-register'><Link style={{ color: 'black', textDecoration: 'none' }} to='./register'>Crear tu cuenta Amazonas</Link></button>
      </div>
    </div>
  )
}

export default Login
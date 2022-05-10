import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import logoAmazonas from '../../images/logo-amazon.png'
import { useDispatch } from 'react-redux'
import { useForm } from '../../Hooks/UseForm'
import Swal from 'sweetalert2'
import { actionRegisterAsync } from '../../Redux/Actions/actionLogin'


const Register = () => {
  const dispatch = useDispatch()

  const [formValue, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    password: '',
    password2: ''
  })

  const { nombre, email, password, password2 } = formValue

  const handleSubmit = (e) => {
    e.preventDefault()
    if(nombre.length === 0 || email.length === 0 || password.length === 0 || password2.length === 0){
      Swal.fire({
        icon: 'warning',
        title: 'Hay campos vacios!',
        text: 'Debes rellenar cada uno de los campos...',
      })
    }
    else if (password !== password2){
      Swal.fire({
        icon: 'warning',
        title: 'Oops!',
        text: 'Las contraseñas no coinciden...',
      })
    }
    else {
      dispatch(actionRegisterAsync(nombre, email, password ))
      reset()
    }
  }

  return (
    <div className='container-register'>
      <Link to='/'>
        <img src={logoAmazonas} alt="" className="logo" />
      </Link>
      <div className="item-register">
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <h5>Tu nombre</h5>
            <input type='text' name='nombre' value={nombre} onChange={handleInputChange} placeholder='Nombres y apellidos' />
          </label>
          <label>
            <h5>Correo Electronico</h5>
            <input type='text' name='email' value={email} onChange={handleInputChange} />
          </label>
          <label>
            <h5>Contraseña</h5>
            <input type='password' name='password' value={password} onChange={handleInputChange} placeholder='Como minimo 6 caracteres' autoComplete='none' />
            <br />
            <h5>Vuelve a escribir la contraseña</h5>
            <input type='password' name='password2' value={password2} onChange={handleInputChange} autoComplete='none' />
          </label>


          <button className='button-register' type='submit'>Registrarse</button>
        </form>

        <p className='termsConditionsP'>Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de amazon.com.
        </p>

        <p className='ir_login'>¿Ya tienes una cuenta? <Link to='/'>Iniciar sesión</Link></p>

      </div>
    </div>
  )
}

export default Register
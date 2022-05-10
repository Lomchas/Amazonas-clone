import React from "react";
import logoAmanzonas from "../../images/logo-amazon.png";
import iconSearch from "../../images/search.png";
import iconGps from "../../images/gps.png";
import Filters from '../Nav/Filters'
import "./Nav.css";
import { FiShoppingCart } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { actionLogoutAsync } from "../../Redux/Actions/actionLogin";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const NavBar = ({ isActive }) => {
  const dispatch = useDispatch()
  const { users } = useSelector(store => store)

  const abrirModal = () => {
    isActive(true)
  }



  const cerrarSesion = () => {
    Swal.fire({
      title: '¿Quieres cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Cerrar Sesion',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Sesion Cerradá...', '', 'success')
        dispatch(actionLogoutAsync())
      }
    })
  }

  return (
    <div className="container-NavBar">
      <nav>
        <Link to='/*'>
          <img src={logoAmanzonas} alt="logoAmazonas" />
        </Link>

        <div className="container-ubicacion">
          <p>Hola!</p>
          <div className="ubicacion">
            <img src={iconGps} alt="gps" />
            <select>
              <option defaultValue>Elige tu ubicacion</option>
              <option>Cali</option>
              <option>Medellin</option>
              <option>Bogota</option>
            </select>
          </div>
        </div>
        <div className="container-search">
          <select className="filters">
            <option>todos los departamentos</option>
          </select>
          <input
            type="text"
            placeholder="Canon EOS R6 - Cámara sin Espejo de Marco"
          />
          <button className="btn-buscar" type="button">
            <img src={iconSearch} alt="buscar" />
          </button>
        </div>
        <div className="container-identificarse">
          <p>Hola! {users?.nombre ? users.nombre : 'identificate...'}</p>
          <select>
            <option defaultValue>
              Cuenta y Lista
            </option>
          </select>
        </div>
        <div className="container-pedidos">
          <p>Devoluciones y pedidos</p>
        </div>
        <div className="container-carrito">
          <FiShoppingCart onClick={abrirModal} />
        </div>
        <div className="Container-logout">
          <FiLogOut onClick={cerrarSesion} />
        </div>
      </nav>
      <Filters />
    </div>

  );
};

export default NavBar;

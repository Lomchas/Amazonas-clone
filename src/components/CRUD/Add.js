import React, { useState } from 'react'
import { HiOutlineUpload } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { FileUp } from '../../Helpers/FileUp';
import { useForm } from '../../Hooks/UseForm';
import { actionAddAsync } from '../../Redux/Actions/actionArticles';
import './add.css'
import { v4 as uuidv4 } from 'uuid';
import NavBar from '../Nav/NavBar';
import ModalCar from '../ModalCar/ModalCar';



const Add = () => {

    const dispatch = useDispatch()
    const [formValue, handleInputChange, reset] = useForm({
        id: uuidv4(),
        nombre: '',
        descripcion: '',
        precio: '',
        image1: '',
        image2: '',
        image3: ''
    })

    const { nombre, descripcion, precio, image1, image2, image3 } = formValue

    const [activeModalCar, setActiveModalCar] = useState(false)


    const handleFileChange1 = (e) => {
        console.log(e.target.files)
        FileUp(e.target.files[0])
            .then((res) => {
                formValue.image1 = res
                console.log(res)
            })
            .catch(err => console.warn(err))
    }
    const handleFileChange2 = (e) => {
        console.log(e.target.files)
        FileUp(e.target.files[0])
            .then((res) => {
                formValue.image2 = res
                console.log(res)
            })
            .catch(err => console.warn(err))
    }
    const handleFileChange3 = (e) => {
        console.log(e.target.files)
        FileUp(e.target.files[0])
            .then((res) => {
                formValue.image3 = res
                console.log(res)
            })
            .catch(err => console.warn(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(actionAddAsync(formValue))
        reset()
    }

    return (
        <div className='container-crudAdd'>
            <NavBar isActive={setActiveModalCar} />
            {
                activeModalCar
                    ? <ModalCar isActive={setActiveModalCar} />
                    : ''
            }
            <form onSubmit={handleSubmit}>
                <h1>Agregar Articulo a la venta</h1>
                <label>
                    <input type='text' name='nombre' value={nombre} onChange={handleInputChange} placeholder='titulo del articulo' />
                </label>
                <label>
                    <input type='text' name='descripcion' value={descripcion} onChange={handleInputChange} placeholder='Agrege la descripcion del articulo' />
                </label>
                <label>
                    <input type='number' name='precio' value={precio} onChange={handleInputChange} placeholder='Ingrese el precio del articulo' />
                </label>
                <label htmlFor='input-file1' className='label-file'>
                    <h5>Agrege la imagen del articulo 1 <HiOutlineUpload className='icon-file-input' /></h5>
                    <input type='file' id='input-file1' name='image1' value={image1} onChange={handleFileChange1} />
                </label>
                <label htmlFor='input-file2' className='label-file'>
                    <h5>Agrege la imagen del articulo 2 <HiOutlineUpload className='icon-file-input' /></h5>
                    <input type='file' id='input-file2' name='image2' value={image2} onChange={handleFileChange2} />
                </label>
                <label htmlFor='input-file3' className='label-file'>
                    <h5>Agrege la imagen del articulo 3<HiOutlineUpload className='icon-file-input' /></h5>
                    <input type='file' id='input-file3' name='image3' value={image3} onChange={handleFileChange3} />
                </label>
                <button type='submit'>
                    <h5>Agregar Articulo</h5>
                    <HiOutlineUpload />
                </button>
            </form>
        </div>
    )
}

export default Add
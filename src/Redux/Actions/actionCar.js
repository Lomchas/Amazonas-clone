import { addDoc, collection, getDocs } from "firebase/firestore"
import { baseDatos } from "../../FIrebase/firebaseConfig"
import { typeCar } from "../Types/typeCar"



export const actionAddCarSync = (article) => {
    return {
        type: typeCar.agregar,
        payload: article
    }
}

export const actionAddCarAsync = (article) => {
    return (dispatch) => {
        addDoc(collection(baseDatos, 'Carrito-amazonas'), article)
        .then((res) => {
            dispatch(actionAddCarSync(article))
        })
        .catch(err => console.log(err))
    }
}

export const actionListCarSync = (articles) => {
    return {
        type: typeCar.list,
        payload: articles
    }
}

export const actionListCarAsync = () => {
    return async (dispatch) => {
        const carritoTraer = await getDocs(collection(baseDatos, 'Carrito-amazonas'))
        const carrito = []
        carritoTraer.map((doc) => {
            carrito.push({
                ...doc.data()
            })
        })
        dispatch(actionListCarSync(carrito))
    }
}

export const actionDeleteCar = (articleId) => {
    
}
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { typesUsers } from "../Types/typesUsers"
import Swal from "sweetalert2"
import { facebook, google } from '../../FIrebase/firebaseConfig'




export const actionLogoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then((user) => {
                dispatch(actionLogoutSync())
                console.log('Adios')
            })
            .catch(err => console.log(err))
    }
}

export const actionLogoutSync = () => {
    return {
        type: typesUsers.logout
    }
}

export const actionRegisterSync = (nombre, email, password) => {
    return {
        type: typesUsers.register,
        payload: {
            nombre,
            email,
            password
        }
    }
}


export const actionRegisterAsync = (nombre, email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, { displayName: nombre })
                dispatch(actionRegisterSync({
                    nombre,
                    email,
                    password,
                }))
                window.alert(`Bienvenido ${user.displayName}`)
            }).catch(err => {
                alert('¡Ups! Correo electronico no valido...')
                console.log(err)
            })
    }
}


export const actionLoginSync = ( nombre, email, password) => {
    return {
        type: typesUsers.login,
        payload: {
            nombre,
            email,
            password
        }
    }
}

export const actionLoginEmailYPassAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(actionLoginSync(user.email, user.password))
                console.log(`Usuario ${user.displayName} Inicio Sesion...`)
                Swal.fire(
                    'Bienvenido',
                    'Inicio de Sesion Exitoso',
                    'success'
                )
            })
            .catch((err) => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos',
                footer: `<a href='/register'>¿Ya estas registrado?</a>`
            }))
    }
}


export const googleAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(actionLoginSync(user.displayName, user.email, user.password))
                console.log('autorizado')
            })
            .catch(err => console.log(err))
    }
}

export const facebookAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch()
                console.log('autorizado')
            })
            .catch(err => console.log(err))
    }
}

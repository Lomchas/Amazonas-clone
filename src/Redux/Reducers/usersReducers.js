import { typesUsers } from "../Types/typesUsers";

const initialState = {
    usuarios: []
}

export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesUsers.login:
            return{
                nombre: action.payload.nombre,
                email: action.payload.email,
                password: action.payload.password
            }
        case typesUsers.register:
            return {
                ...state,
                usuarios: [...state.usuarios, action.payload]
            }   
        case typesUsers.logout:
            return{
                ...state,
                usuarios: []
            }     
        default:
            return state
    }
}
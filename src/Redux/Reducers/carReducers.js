import { typeCar } from "../Types/typeCar";

const initialState = {
    car: []
}

export const carReducers = (state = initialState, action) => {
    switch (action.payload) {
        case typeCar.agregar:
            return {
                car: [action.payload]
            }
        case typeCar.list:
            return{
                car: [...action.payload]
            }    
        case typeCar.eliminar:
            return{

            }   

        default:
            return state
    }
}
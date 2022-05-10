import { typesArticles } from "../Types/typesArticles";


const initialState = {
    articles: []
}

export const articleReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesArticles.add:
            return {
                articles: [action.payload]
            }
        case typesArticles.list:
            return {
                articles: [...action.payload]
            }
        case typesArticles.search:
            return{
                articles: [state.articles.filter(article => article.nombre === action.payload)]
            }    
        case typesArticles.edit:
            return {
                ...state
            }
        case typesArticles.delete:
            return {
                ...state
            }
        case typesArticles.detail:
            return {
                ...state
            }
        default:
            return state
    }
}
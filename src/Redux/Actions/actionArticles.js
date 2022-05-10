import { addDoc, collection, getDocs } from "firebase/firestore"
import { baseDatos } from "../../FIrebase/firebaseConfig"
import { typesArticles } from "../Types/typesArticles"



export const actionListSync = (article) => {
    return{
        type: typesArticles.list,
        payload: article
    }
}

export const actionListAsync = () => {
    return async (dispatch) => {
        const coleccionTraer = await getDocs(collection(baseDatos, 'Articles-amazonas-clone'))
        const articles = []
        coleccionTraer.forEach(doc => {
            articles.push({
                ...doc.data()
            })
        })
        dispatch(actionListSync(articles))
    }
}


export const actionAddSync = (article) => {
    return {
        type: typesArticles.add,
        payload: article 
    }
}

export const actionAddAsync = (article) => {
    return (dispatch) => {
        addDoc(collection(baseDatos, 'Articles-amazonas-clone'), article)
        .then((res) => {
            dispatch(actionAddSync(article))
            dispatch(actionListAsync())
        })
        .catch(err => console.log(err))
    }
}
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { articleReducers } from '../Reducers/articleReducers';
import { carReducers } from '../Reducers/carReducers';
import { usersReducers } from '../Reducers/usersReducers';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    users: usersReducers,
    articles: articleReducers,
    car: carReducers
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


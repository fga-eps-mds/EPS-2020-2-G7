import {
    createStore,
    //combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
//import { createUser } from './actions/user'

const storeConfig = () => {
    return createStore(compose(applyMiddleware(thunk)))
}

export default storeConfig
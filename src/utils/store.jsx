// import { combineReducers, createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import tokenReducer from '../components/FormSignin/tokenReducer'
import inputValueReducer from '../components/FormSignin/inputValueReducer'
import { configureStore } from '@reduxjs/toolkit'

//-------------------------
export default configureStore({
    reducer: {
        token: tokenReducer,
        inputValue: inputValueReducer,
    },
    // middleware: (getDefaultMiddleware) => [
    //     ...getDefaultMiddleware(),
    //     // mainMiddleware,
    // ],
})
//-------------------------

// const reducer = combineReducers({
//     token: tokenReducer,
//     inputValue: inputValueReducer,
// })

// const reduxDevtools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(reducer, applyMiddleware(thunk))

// export default store

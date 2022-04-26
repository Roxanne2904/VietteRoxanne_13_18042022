// import { combineReducers, createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
//*reducers
import tokenReducer from '../components/FormSignin/tokenReducer'
import inputValueReducer from '../components/FormSignin/inputValueReducer'
import profileReducer from '../pages/User/profileReducer'
//*redux-persist
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const reducer = combineReducers({
    token: tokenReducer,
    inputValue: inputValueReducer,
    profile: profileReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)
//-------------------------
const store = configureStore({
    reducer: {
        persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export default store
//-------------------------

// const reducer = combineReducers({
//     token: tokenReducer,
//     inputValue: inputValueReducer,
// })

// const reduxDevtools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(reducer, applyMiddleware(thunk))

// export default store

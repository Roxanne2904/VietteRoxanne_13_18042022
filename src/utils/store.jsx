// import { combineReducers, createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
//*reducers
import tokenReducer from '../components/FormLogin/tokenReducer'
import loginValuesReducer from '../components/FormLogin/loginValuesReducer'
import editValuesReducer from '../components/FormEditName/editValuesReducer'
import profileReducer from '../pages/Profile/profileReducer'
import profileUpdateReducer from '../components/FormEditName/profileUpdateReducer'
import toggleEditFormReducer from '../components/Button/toggleEditFormReducer'
import screenWidthReducer from '../components/Header/widthReducer'
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
    profile: profileReducer,
    profileUpdate: profileUpdateReducer,
    loginValues: loginValuesReducer,
    editValues: editValuesReducer,
    toggleEditForm: toggleEditFormReducer,
    screenWidth: screenWidthReducer,
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

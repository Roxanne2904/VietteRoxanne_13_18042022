// import { combineReducers, createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
//*reducers
import tokenReducer from '../components/FormSignin/tokenReducer'
import signinValueReducer from '../components/FormSignin/signinValueReducer'
import editValueReducer from '../components/FormEditName/editValueReducer'
import profileReducer from '../pages/User/profileReducer'
import editProfileReducer from '../components/FormEditName/editProfileReducer'
import toggleEditNameReducer from '../components/Button/toggleEditNameReducer'
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
    editProfile: editProfileReducer,
    signinValue: signinValueReducer,
    editValue: editValueReducer,
    editName: toggleEditNameReducer,
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

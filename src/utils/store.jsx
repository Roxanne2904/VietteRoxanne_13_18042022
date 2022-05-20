import { configureStore } from '@reduxjs/toolkit'
//*reducers
import tokenReducer from '../components/FormLogin/tokenReducer'
import loginInputValuesReducer from '../components/FormLogin/loginInputValuesReducer'
import InputValuesToUpdateReducer from '../components/FormEditName/InputValuesToUpdateReducer'
import profileReducer from '../pages/Profile/profileReducer'
import profileUpdateReducer from '../components/FormEditName/profileUpdateReducer'
import toggleEditFormReducer from '../components/Button/toggleEditFormReducer'
import screenWidthReducer from '../components/Header/screenWidthReducer'
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
    loginInputValues: loginInputValuesReducer,
    InputValuesToUpdate: InputValuesToUpdateReducer,
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

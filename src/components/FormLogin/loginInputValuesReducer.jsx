import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    password: null,
}

const loginInputValuesSlide = createSlice({
    name: 'loginInputValues',
    initialState,
    reducers: {
        getEmail: {
            prepare: (email) => ({ payload: email }),
            reducer: (draft, action) => {
                draft.email = action.payload
                return
            },
        },
        getPassword: {
            prepare: (password) => ({ payload: password }),
            reducer: (draft, action) => {
                draft.password = action.payload
                return
            },
        },
    },
})

const { actions, reducer } = loginInputValuesSlide
export const { getEmail, getPassword } = actions
export default reducer

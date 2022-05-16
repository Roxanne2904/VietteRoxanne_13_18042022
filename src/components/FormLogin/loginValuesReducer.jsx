import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    password: null,
}

const loginValueSlide = createSlice({
    name: 'loginValues',
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

const { actions, reducer } = loginValueSlide
export const { getEmail, getPassword } = actions
export default reducer

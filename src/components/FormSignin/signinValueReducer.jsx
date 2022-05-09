import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    password: null,
}

const signinValueSlide = createSlice({
    name: 'signinValue',
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

const { actions, reducer } = signinValueSlide
export const { getEmail, getPassword } = actions
export default reducer

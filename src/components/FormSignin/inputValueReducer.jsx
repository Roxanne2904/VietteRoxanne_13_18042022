// import produce from 'immer'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    password: null,
}

// //*le nom des actions
// const GET_EMAIL = 'inputValue/getEmail'
// const GET_PASSWORD = 'inputValue/getPassword'

// //*La requête est en cours
// export const getEmail = (email) => ({
//     type: GET_EMAIL,
//     payload: email,
// })

// export const getPassword = (password) => ({
//     type: GET_PASSWORD,
//     payload: password,
// })

const inputValueSlide = createSlice({
    name: 'inputValue',
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
            },
        },
    },
})

const { actions, reducer } = inputValueSlide
export const { getEmail, getPassword } = actions
export default reducer

// export default function inputValueReducer(state = initialState, action) {
//     return produce(state, (draft) => {
//         switch (action.type) {
//             case GET_EMAIL: {
//                 draft.email = action.payload
//                 return
//             }
//             case GET_PASSWORD: {
//                 draft.password = action.payload
//                 return
//             }

//             default:
//                 return
//         }
//     })
// }

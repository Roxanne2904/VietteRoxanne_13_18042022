import { createSlice } from '@reduxjs/toolkit'

const toggleEditFormSlide = createSlice({
    name: 'editForm',
    initialState: 'open',
    reducers: {
        resetToggleEditForm: {
            reducer: (state) => {
                return (state = 'close')
            },
        },
        toggleEditForm: {
            reducer: (state) => {
                return state === 'open' ? 'close' : 'open'
            },
        },
    },
})

const { actions, reducer } = toggleEditFormSlide
export const actionsToggleEditForm = actions
export default reducer

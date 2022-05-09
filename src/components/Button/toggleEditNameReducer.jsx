import { createSlice } from '@reduxjs/toolkit'

const toggleEditNameSlide = createSlice({
    name: 'inputValue',
    initialState: 'open',
    reducers: {
        closeEditName: {
            reducer: (state) => {
                return (state = 'close')
            },
        },
        toggleEditName: {
            reducer: (state) => {
                return state === 'open' ? 'close' : 'open'
            },
        },
    },
})

const { actions, reducer } = toggleEditNameSlide
export const actionsEditName = actions
export default reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentWidth: null,
}

const widthSlide = createSlice({
    name: 'width',
    initialState,
    reducers: {
        resetWidth: {
            reducer: (draft) => {
                draft.currentWidth = null
                return
            },
        },
        updateWidth: {
            prepare: (width) => ({ payload: width }),
            reducer: (draft, action) => {
                draft.currentWidth = action.payload
                return
            },
        },
    },
})

const { actions, reducer } = widthSlide
export default reducer
export const actionsWidth = actions

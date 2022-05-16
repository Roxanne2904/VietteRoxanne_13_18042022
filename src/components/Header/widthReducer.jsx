import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentWidth: null,
}

const screenWidthSlide = createSlice({
    name: 'width',
    initialState,
    reducers: {
        resetScreenWidth: {
            reducer: (draft) => {
                draft.currentWidth = null
                return
            },
        },
        updateScreenWidth: {
            prepare: (width) => ({ payload: width }),
            reducer: (draft, action) => {
                draft.currentWidth = action.payload
                return
            },
        },
    },
})

const { actions, reducer } = screenWidthSlide
export default reducer
export const actionsScreenWidth = actions

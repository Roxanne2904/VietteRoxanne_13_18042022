import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    editFirstName: null,
    editLastName: null,
}

const editValueSlide = createSlice({
    name: 'editValues',
    initialState,
    reducers: {
        resetToInitialState: (draft) => {
            draft.editFirstName = null
            draft.editLastName = null
        },
        getEditFirstName: {
            prepare: (editFirstName) => ({ payload: editFirstName }),
            reducer: (draft, action) => {
                draft.editFirstName = action.payload
                return
            },
        },
        getEditLastName: {
            prepare: (editLastName) => ({ payload: editLastName }),
            reducer: (draft, action) => {
                draft.editLastName = action.payload
                return
            },
        },
    },
})

const { actions, reducer } = editValueSlide
export const { getEditFirstName, getEditLastName, resetToInitialState } =
    actions
export default reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstNameEdited: null,
    lastNameEdited: null,
}

const InputValuesToUpdateSlide = createSlice({
    name: 'InputValuesToUpdate',
    initialState,
    reducers: {
        resetToInitialState: (draft) => {
            draft.firstNameEdited = null
            draft.lastNameEdited = null
        },
        getFirstNameEdited: {
            prepare: (firstNameEdited) => ({ payload: firstNameEdited }),
            reducer: (draft, action) => {
                draft.firstNameEdited = action.payload
                return
            },
        },
        getLastNameEdited: {
            prepare: (lastNameEdited) => ({ payload: lastNameEdited }),
            reducer: (draft, action) => {
                draft.lastNameEdited = action.payload
                return
            },
        },
    },
})

const { actions, reducer } = InputValuesToUpdateSlide
export const { getFirstNameEdited, getLastNameEdited, resetToInitialState } =
    actions
export default reducer

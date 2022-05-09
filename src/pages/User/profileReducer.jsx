import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'void', //void = "vide" //*le statut permet de suivre l'état de la requête
    data: null, //*les données lorsque la requête a fonctionné
    error: null, //* l'erreur lorsque la requête échoue
}

const profileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        profileDisconnected: (draft) => {
            draft.status = 'void'
            draft.data = null
            draft.error = null
            return
        },
        profileFetching: (draft) => {
            if (draft.status === 'void') {
                draft.status = 'pending'
                return
            }
            if (draft.status === 'resolved') {
                draft.status = 'updating'
                return
            }
            if (draft.status === 'rejected') {
                draft.status = 'pending'
            }
            return
        },
        profileResolved: {
            prepare: (data) => ({ payload: data }),
            reducer: (draft, action) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload
                    draft.status = 'resolved'
                    draft.error = null
                    return
                }
                return
            },
        },
        profileRejected: {
            prepare: (error) => ({ payload: error }),
            reducer: (draft, action) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = 'rejected'
                    return
                }
                return
            },
        },
    },
})

const { actions, reducer } = profileReducer

export const actionsProfile = actions

export default reducer

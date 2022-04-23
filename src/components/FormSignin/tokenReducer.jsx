// import produce from 'immer'
import { selectToken } from '../../utils/selectors'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'void', //void = "vide" //*le statut permet de suivre l'état de la requête
    data: null, //*les données lorsque la requête a fonctionné
    error: null, //* l'erreur lorsque la requête échoue
}

// //*le nom des actions
// const FETCHING = 'token/fetching'
// const RESOLVED = 'token/resolved'
// const REJECTED = 'token/rejected'
// //*La requête est en cours

// const tokenFetching = () => ({
//     type: FETCHING,
//     // payload: { email, password },
// })
// const tokenResolved = (data) => ({ type: RESOLVED, payload: data })
// const tokenRejected = (error) => ({ type: REJECTED, payload: error })

export function fetchOrUpdateToken(email, password) {
    return async (dispatch, getState) => {
        //* On peut lire le state actuel avec le thunk
        const status = selectToken(getState()).status
        //*Si la requête est déjà en cours
        if (status === 'pending' || status === 'updating') {
            //*On stop la fonction pour éviter de récupérer plusieurs fois la même données
            return
        }
        //*On peut modifier le state en envoyant des actions avec dispatch
        //*Ici on indique que le requête est en cours
        dispatch(actions.tokenFetching())

        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/login',
                data: {
                    email: email,
                    password: password,
                },
            })
            const data = await response.data.body
            dispatch(actions.tokenResolved(data))
        } catch (error) {
            const currentError = error.response.data
            dispatch(actions.tokenRejected(currentError))
        }
    }
}

const { actions, reducer } = createSlice({
    name: 'token',
    initialState,
    reducers: {
        tokenFetching: (draft) => {
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
        tokenResolved: {
            prepare: (data) => ({ payload: data }),
            reducer: (draft, action) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload
                    draft.status = 'resolved'
                    return
                }
                return
            },
        },
        tokenRejected: {
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

export default reducer

// export default function tokenReducer(state = initialState, action) {
//     return produce(state, (draft) => {
//         switch (action.type) {
//             case FETCHING: {
//                 if (draft.status === 'void') {
//                     draft.status = 'pending'
//                     return
//                 }
//                 if (draft.status === 'resolved') {
//                     draft.status = 'updating'
//                     return
//                 }
//                 if (draft.status === 'rejected') {
//                     draft.status = 'pending'
//                 }
//                 return
//             }
//             case RESOLVED: {
//                 if (draft.status === 'pending' || draft.status === 'updating') {
//                     draft.data = action.payload
//                     draft.status = 'resolved'
//                     return
//                 }
//                 return
//             }
//             case REJECTED: {
//                 if (draft.status === 'pending' || draft.status === 'updating') {
//                     draft.error = action.payload
//                     draft.data = null
//                     draft.status = 'rejected'
//                     return
//                 }
//                 return
//             }
//             default:
//                 return
//         }
//     })
// }

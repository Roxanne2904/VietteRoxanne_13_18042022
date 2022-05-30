//*actions
import { actionsProfileUpdate } from './profileUpdateReducer'
import { actionsProfile } from '../../pages/Profile/profileReducer'
import { CheckAndUpdateTheName } from './utilsFunctions'
import { toggleEditFormAndResetEditValues } from '../Button/actions'
//*selectors
import { selectProfileUpdate } from '../../utils/selectors'
//*axios
import setAxiosInstance from '../../utils/axiosInstance'

/**
 * This async function allows you to set up the thunk middleware to use dispatch and getState
 * and activate several actions to fetch or update datas from profile update.
 * @param { String } token
 * @param { String } firstName
 * @param { String } lastName
 * @returns { async function } It return an async function using redux thunk to dispatch several
 * actions that depend on the axios method
 */

export function fetchOrUpdateProfileUpdate(token, firstName, lastName) {
    const axiosInstance = setAxiosInstance(token)
    return async (dispatch, getState) => {
        const status = selectProfileUpdate(getState()).status
        if (status === 'pending' || status === 'updating') {
            return
        }

        dispatch(actionsProfileUpdate.profileUpdateFetching())

        try {
            const response = await axiosInstance.put('/user/profile', {
                firstName: `${firstName}`,
                lastName: `${lastName}`,
            })
            const data = await response.data.body

            dispatch(actionsProfileUpdate.profileUpdateResolved(data))
        } catch (error) {
            if (error.response === undefined) {
                dispatch(actionsProfile.profileDisconnected())
                dispatch(actionsProfileUpdate.profileUpdateDisconnected())
                window.location.pathname = '/error'
            } else {
                const currentError = error.response.data
                dispatch(
                    actionsProfileUpdate.profileUpdateRejected(currentError)
                )
            }
        }
    }
}

/**
 * It simply launches, with a dispatch, the fetchOrUpdateProfileUpdate function.
 * @param { String } token
 * @param { String } firstName
 * @param { String } firstNameValue
 * @param { String } firstNameUpdated
 * @param { String } lastName
 * @param { String } lastNameValue
 * @param { String } lastNameUpdated
 * @returns { asyn function } It return an async function using redux thunk to dispatch
 * fetchOrUpdateProfileUpdate function.
 */
export function handleFetchOrUpdateProfileUpdate(
    token,
    firstName,
    firstNameValue,
    firstNameUpdated,
    lastName,
    lastNameValue,
    lastNameUpdated
) {
    return async (dispatch) => {
        dispatch(
            fetchOrUpdateProfileUpdate(
                token,
                CheckAndUpdateTheName(
                    firstName,
                    firstNameValue,
                    firstNameUpdated
                ),
                CheckAndUpdateTheName(lastName, lastNameValue, lastNameUpdated)
            )
        )
    }
}

/**
 * It simply launch, with a dispatch, toggleEditFormAndResetEditValues function
 * to toggle the display of the edit form and reset his values.
 * @param { Object } toggleEditFormAction An actions from toggleEditForm Reducer to toggle the current state.
 * @param { Object } resetToInitialState An action to reset the current state from InputValuesToUpdate Reducer.
 * @returns { async function } It return an async function using redux thunk to dispatch
 * toggleEditFormAndResetEditValues function.
 */

export function handleToggleEditFormAndResetEditValues(
    toggleEditFormAction,
    resetToInitialState
) {
    return async (dispatch) => {
        dispatch(
            toggleEditFormAndResetEditValues(
                toggleEditFormAction,
                resetToInitialState
            )
        )
    }
}

//*actions
import { actionsEditProfile } from './editProfileReducer'
import { actionsProfile } from '../../pages/User/profileReducer'
import { actionsToken } from '../FormSignin/tokenReducer'
//*selectors
import { selectEditProfile } from '../../utils/selectors'
//*axios
import setAxiosInstance from '../../utils/axiosInstance'

export function fetchOrUpdateEditProfile(token, firstName, lastName) {
    const axiosInstance = setAxiosInstance(token)
    return async (dispatch, getState) => {
        const status = selectEditProfile(getState()).status
        if (status === 'pending' || status === 'updating') {
            return
        }

        dispatch(actionsEditProfile.editProfileFetching())

        // console.log(token)
        // console.log(firstName)
        // console.log(lastName)

        try {
            const response = await axiosInstance.put('/user/profile', {
                firstName: `${firstName}`,
                lastName: `${lastName}`,
            })
            const data = await response.data.body

            dispatch(actionsEditProfile.editProfileResolved(data))
        } catch (error) {
            if (error.response === undefined) {
                dispatch(actionsToken.tokenDisconnected())
                dispatch(actionsProfile.profileDisconnected())
                dispatch(actionsEditProfile.editProfileDisconnected())
                window.location.pathname = '/error'
            } else {
                const currentError = error.response.data
                dispatch(actionsEditProfile.editProfileRejected(currentError))
            }
        }
    }
}

// export function keepProfileDataIfNoEdit(dispatch, getState) {
//     const newFirstName = selectEditProfile(getState()).data.firstName
//     const newLastName = selectEditProfile(getState()).data.lastName

//     console.log(newFirstName)
// }

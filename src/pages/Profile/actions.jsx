import { actionsProfile } from './profileReducer'
// import { actionsToken } from '../../components/FormLogin/tokenReducer'
import setAxiosInstance from '../../utils/axiosInstance'
// import axios from 'axios'
//*selectors
import { selectProfile } from '../../utils/selectors'
// import { selectToken } from '../../utils/selectors'
// import { selectInputValue } from '../../utils/selectors'

// import { fetchOrUpdateToken } from '../../components/FormSignin/actions'

export function fetchOrUpdateProfile(token) {
    const axiosInstance = setAxiosInstance(token)
    return async (dispatch, getState) => {
        const status = selectProfile(getState()).status
        if (status === 'pending' || status === 'updating') {
            return
        }

        dispatch(actionsProfile.profileFetching())

        try {
            const response = await axiosInstance.post('/user/profile')

            const data = await response.data.body
            dispatch(actionsProfile.profileResolved(data))
        } catch (error) {
            if (error.response === undefined) {
                // dispatch(actionsToken.tokenDisconnected())
                dispatch(actionsProfile.profileDisconnected())
                window.location.pathname = '/error'
            } else {
                const currentError = error.response.data
                dispatch(actionsProfile.profileRejected(currentError))
            }
        }
    }
}

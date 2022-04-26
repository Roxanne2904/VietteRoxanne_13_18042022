import { actionsProfile } from './profileReducer'
import { actionsToken } from '../../components/FormSignin/tokenReducer'
import axios from 'axios'
// import { selectProfile } from '../../utils/selectors'

export function fetchOrUpdateProfile(token) {
    return async (dispatch) => {
        dispatch(actionsProfile.profileFetching())
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/user/profile',
                headers: { Authorization: `Bearer ${token}` },
            })
            const data = await response.data.body
            dispatch(actionsProfile.profileResolved(data))
        } catch (error) {
            if (error.response === undefined) {
                dispatch(actionsToken.tokenDisconnected())
                dispatch(actionsProfile.profileDisconnected())
                window.location.pathname = '/error'
            } else {
                const currentError = error.response.data
                dispatch(actionsProfile.profileRejected(currentError))
            }
        }
    }
}

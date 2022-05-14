// import { selectToken } from '../../utils/selectors'
import { actionsToken } from './tokenReducer'
import axios from 'axios'
// import { useNavigate} from 'react-router-dom'

export function fetchOrUpdateToken(email, password) {
    return async (dispatch, getState) => {
        // const status = selectToken(getState()).status
        // if (status === 'pending' || status === 'updating') {
        //     return
        // }
        dispatch(actionsToken.tokenFetching())

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

            dispatch(actionsToken.tokenResolved(data))
        } catch (error) {
            if (error.response === undefined) {
                dispatch(actionsToken.tokenDisconnected())
                console.log(error)
                window.location.pathname = '/error'
            } else {
                const currentError = error.response.data
                // console.log(currentError.message)
                dispatch(actionsToken.tokenRejected(currentError))
            }
        }
    }
}

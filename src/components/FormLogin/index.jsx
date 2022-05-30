import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//*components
import Button from '../Button/index'
//*actions
import { fetchOrUpdateToken } from './actions'
import { getEmail, getPassword } from './loginInputValuesReducer.jsx'

//*select
import { selectToken } from '../../utils/selectors.jsx'
import { selectloginInputValues } from '../../utils/selectors.jsx'
import Input from '../Input/index.jsx'

//*Styled
import { StyledErrorMessage } from './styled.jsx'

export default function FormLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const { status, data, error } = token

    const loginInputValues = useSelector(selectloginInputValues)
    const { email, password } = loginInputValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(
            fetchOrUpdateToken(
                loginInputValues.email,
                loginInputValues.password
            )
        )
    }

    useEffect(() => {
        if (status === 'resolved' && data != null) {
            navigate('/profile')
        }
    }, [navigate, token, status, data])

    return (
        <form onSubmit={handleLogin} noValidate>
            <Input
                label="Username"
                type="text"
                id="username"
                autoComplete="on"
                event={(e) => dispatch(getEmail(e.target.value))}
                value={email !== null && !email ? '' : email}
            />
            <Input
                label="Password"
                type="password"
                id="password"
                autoComplete="on"
                event={(e) => dispatch(getPassword(e.target.value))}
                value={password !== null && !password ? '' : password}
            />
            <Input
                label="Remember me"
                type="checkbox"
                id="remember-me"
                autoComplete="off"
            />
            <Button title={'Sign In'} name="LOGIN" />
            <StyledErrorMessage>
                {status === 'rejected'
                    ? error.status + ' ' + error.message
                    : ''}
            </StyledErrorMessage>
        </form>
    )
}

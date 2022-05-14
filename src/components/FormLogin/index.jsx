import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styled from 'styled-components'
//*components
import Button from '../Button/index'
//*actions
import { fetchOrUpdateToken } from './actions'
import { getEmail, getPassword } from './signinValueReducer.jsx'
// import { actions } from './tokenReducer'

//*select
import { selectToken } from '../../utils/selectors.jsx'
import { selectSigninValue } from '../../utils/selectors.jsx'
import Input from '../Input/index.jsx'

//*Styled
// import { SignInButton } from './styled.jsx'

const StyledErrorMessage = styled.p`
    color: red;
    text-align: center;
    font-weight: bold;
`

export default function FormLogin() {
    // const store = useStore()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const signinValue = useSelector(selectSigninValue)

    const { email, password } = signinValue
    const { status, data, error } = token

    // console.log(signinValue)
    console.log(error)

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(fetchOrUpdateToken(signinValue.email, signinValue.password))
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
                value={email && !email ? '' : email}
            />
            <Input
                label="Password"
                type="password"
                id="password"
                autoComplete="on"
                event={(e) => dispatch(getPassword(e.target.value))}
                value={!password ? '' : password}
            />
            <Input
                label="Remember me"
                type="checkbox"
                id="remember-me"
                autoComplete="off"
            />

            {/* <SignInButton>Sign In</SignInButton> */}
            <Button title={'Sign In'} name="LOGIN" />
            <StyledErrorMessage>
                {status === 'rejected'
                    ? error.status + ' ' + error.message
                    : ''}
            </StyledErrorMessage>
        </form>
    )
}

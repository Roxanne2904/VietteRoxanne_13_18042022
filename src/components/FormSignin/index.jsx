import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//*actions
import { fetchOrUpdateToken } from './actions'
import { getEmail, getPassword } from './inputValueReducer.jsx'
// import { actions } from './tokenReducer'

//*select
import { selectToken } from '../../utils/selectors.jsx'
import { selectInputValue } from '../../utils/selectors.jsx'
import Input from '../Input/index.jsx'

//*Styled
import { SignInButton } from './styled.jsx'

export default function FormSignin() {
    // const store = useStore()
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const inputValue = useSelector(selectInputValue)

    const { email, password } = inputValue
    const { status, data } = token

    console.log(inputValue)
    // console.log(token)

    const handleSignin = (e) => {
        e.preventDefault()
        dispatch(fetchOrUpdateToken(inputValue.email, inputValue.password))
    }

    useEffect(() => {
        if (status === 'resolved' && data != null) {
            navigate('/user')
        }
    }, [navigate, token, status, data])

    return (
        <form onSubmit={handleSignin} noValidate>
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

            <SignInButton>Sign In</SignInButton>
            <p>
                {status === 'rejected'
                    ? '[!]Error - Your password or your email is not valid'
                    : ''}
            </p>
        </form>
    )
}

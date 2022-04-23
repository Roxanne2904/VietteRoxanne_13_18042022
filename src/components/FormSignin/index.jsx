import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//*actions
import { fetchOrUpdateToken } from './tokenReducer.jsx'
import { getEmail, getPassword } from './inputValueReducer.jsx'

//*select
import { selectToken } from '../../utils/selectors.jsx'
import { selectInputValue } from '../../utils/selectors.jsx'
import Input from '../Input/index.jsx'

//*Styled
import { SignInButton } from './styled.jsx'

export default function FormSignin() {
    let navigate = useNavigate()
    // const store = useStore()
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const inputValue = useSelector(selectInputValue)
    const { email, password } = inputValue

    console.log(inputValue)
    console.log(token)

    const handleSignin = (e) => {
        e.preventDefault()
        dispatch(fetchOrUpdateToken(inputValue.email, inputValue.password))
    }

    useEffect(() => {
        if (token.status === 'resolved' && token.data != null) {
            navigate('/user')
        }
    }, [navigate, token])

    return (
        <form onSubmit={handleSignin} noValidate>
            <Input
                label="Username"
                type="text"
                id="username"
                autoComplete="on"
                event={(e) => dispatch(getEmail(e.target.value))}
                value={!email ? '' : email}
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
                {token.status === 'rejected'
                    ? '[!]Error - Your password or your email is not valid'
                    : ''}
            </p>
        </form>
    )
}

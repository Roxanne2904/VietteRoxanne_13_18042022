import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
//*Styled
import {
    Main,
    SignInContent,
    InputWrapper,
    InputRemember,
    SignInButton,
} from './styled.jsx'

export default function SignIn() {
    const test = (e) => {
        e.preventDefault()
        window.location.pathname = '/user'
    }
    return (
        <div>
            <Main>
                <SignInContent>
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        className="sign-in-icon"
                    />
                    <h1>Sign In</h1>
                    <form onSubmit={test}>
                        <InputWrapper>
                            <label>
                                Username
                                <input type="text" id="username" />
                            </label>
                        </InputWrapper>
                        <InputWrapper>
                            <label>
                                Password
                                <input
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                />
                            </label>
                        </InputWrapper>
                        <InputRemember>
                            <label>
                                Remember me{' '}
                                <input type="checkbox" id="remember-me" />
                            </label>
                        </InputRemember>
                        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                        {/* <a href="./user.html" class="sign-in-button">Sign In</a> */}
                        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                        <SignInButton>Sign In</SignInButton>
                        {/* <!--  --> */}
                    </form>
                </SignInContent>
            </Main>
        </div>
    )
}

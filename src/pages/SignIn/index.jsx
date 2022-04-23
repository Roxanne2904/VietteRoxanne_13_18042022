import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

//*Components
import FormSignin from '../../components/FormSignin/index.jsx'

//*Styled
import { Main, SignInContent } from './styled.jsx'

export default function SignIn() {
    return (
        <div>
            <Main>
                <SignInContent>
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        className="sign-in-icon"
                    />
                    <h1>Sign In</h1>
                    <FormSignin />
                </SignInContent>
            </Main>
        </div>
    )
}

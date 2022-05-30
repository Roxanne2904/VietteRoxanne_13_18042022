import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
//*Components
import FormLogin from '../../components/FormLogin/index.jsx'
//*Styled
import { Main, LoginContent } from './styled.jsx'

export default function Login() {
    return (
        <div>
            <Main>
                <LoginContent>
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        className="sign-in-icon"
                    />
                    <h1>Sign In</h1>
                    <FormLogin />
                </LoginContent>
            </Main>
        </div>
    )
}

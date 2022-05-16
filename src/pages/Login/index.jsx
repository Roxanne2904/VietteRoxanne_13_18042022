import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch, useSelector } from 'react-redux'
//*actions
// import { actionsToken } from '../../components/FormLogin/tokenReducer.jsx'
//*Components
import FormSignin from '../../components/FormLogin/index.jsx'
//*selector
// import { selectToken } from '../../utils/selectors.jsx'
//*Styled
import { Main, SignInContent } from './styled.jsx'

export default function Login() {
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

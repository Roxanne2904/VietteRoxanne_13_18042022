import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch, useSelector } from 'react-redux'
//*actions
// import { actionsToken } from '../../components/FormLogin/tokenReducer.jsx'
//*Components
import FormLogin from '../../components/FormLogin/index.jsx'
//*selector
// import { selectToken } from '../../utils/selectors.jsx'
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

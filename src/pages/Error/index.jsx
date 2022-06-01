import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

//*actions
import { actionsToken } from '../../components/FormLogin/tokenReducer'
//*Styled
import { ErrorContent, ErrorLink } from './styled.jsx'

export default function Error() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(window.location.pathname)
        if (
            window.location.pathname === '/profile' ||
            window.location.pathname === '/'
        ) {
            return
        } else if (window.location.pathname !== '/error') {
            return navigate('/')
        } else {
            dispatch(actionsToken.tokenDisconnected())
        }
    })
    return (
        <ErrorContent id="error">
            <h1>
                Oops ! <br />
                An error has occurred...
            </h1>
            <span>
                Check if :
                <br />
                <ul>
                    <li>
                        you have launch the Api
                        <br />
                        If not, follow these instructions{' '}
                        <a
                            href="https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API"
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            HERE
                        </a>
                    </li>
                    <li>your internet connexion is stable</li>
                    <li>you are connected to the internet</li>
                </ul>
            </span>
            <ErrorLink to="/login">Sign In</ErrorLink>
        </ErrorContent>
    )
}

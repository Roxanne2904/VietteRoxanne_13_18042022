// import { useSelector } from 'react-redux'
// import { selectProfile } from '../../utils/selectors'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// //*selectors
// import { selectToken } from '../../utils/selectors'
//*actions
import { actionsToken } from '../../components/FormLogin/tokenReducer'

const ErrorContent = styled.section`
    margin: 10px 30px 50px;
`
const ErrorLink = styled(Link)`
    background: #00bc77;
    padding: 10px;
    color: white;
    text-decoration: none;
    margin: 20px 0;
    display: block;
    width: fit-content;
`

export default function Error() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (window.location.pathname !== '/error') {
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
                    {/* <li>then, check if you've been correctly log in</li> */}
                </ul>
            </span>
            <ErrorLink to="/login">Sign In</ErrorLink>
        </ErrorContent>
    )
}

import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//*actions
import { actionsToken } from '../FormSignin/tokenReducer'
//*selectors
import { selectToken } from '../../utils/selectors'
import { selectProfile } from '../../utils/selectors'

//*STYLED
import {
    MainNav,
    MainNavLogo,
    MainNavLogoImage,
    SrOnly,
    MainNavItem,
    MainNavItemLogOut,
} from './styled'

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(selectToken)

    const profile = useSelector(selectProfile)
    const { firstName } = profile.data
    // console.log(firstName)

    const handleLogOut = () => {
        dispatch(actionsToken.tokenDisconnected())
        navigate('/')
    }

    return (
        <header>
            <MainNav>
                <MainNavLogo to="/">
                    <MainNavLogoImage src={logo} alt="Argent Bank Logo" />
                    <SrOnly>Argent Bank</SrOnly>
                </MainNavLogo>
                <div>
                    {token.status !== 'resolved' ? (
                        <MainNavItem to="/sign-in">
                            <FontAwesomeIcon icon={faUserCircle} />
                            Sign In
                        </MainNavItem>
                    ) : (
                        <div>
                            <MainNavItem to="/user">
                                <FontAwesomeIcon icon={faUserCircle} />
                                {`${firstName}`}
                            </MainNavItem>
                            <MainNavItemLogOut
                                role={'button'}
                                tabIndex={'0'}
                                onClick={() => {
                                    handleLogOut()
                                }}
                            >
                                <FontAwesomeIcon icon={faSignOut} />
                                Sign Out
                            </MainNavItemLogOut>
                        </div>
                    )}
                </div>
            </MainNav>
        </header>
    )
}

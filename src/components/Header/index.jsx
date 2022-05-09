import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//*actions
import { actionsToken } from '../FormSignin/tokenReducer'
import { actionsProfile } from '../../pages/User/profileReducer'
import { actionsEditProfile } from '../FormEditName/editProfileReducer'
import { actionsEditName } from '../Button/toggleEditNameReducer'
//*selectors
import {
    selectToken,
    selectProfile,
    selectEditProfile,
} from '../../utils/selectors'

// import { selectInputValue } from '../../utils/selectors'
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
    const { firstName } = profile.data !== null && profile.data

    const editProfile = useSelector(selectEditProfile)
    const { data } = editProfile
    const editFirstName = data !== null && data.firstName

    // console.log(!newFirstName)
    // console.log(editProfile)
    // console.log(token)
    // console.log(profile)
    // console.log(`profile data :`)

    // console.log(`values data :`)
    // console.log(inputValue)

    const handleLogOut = () => {
        dispatch(actionsToken.tokenDisconnected())
        dispatch(actionsProfile.profileDisconnected())
        dispatch(actionsEditProfile.editProfileDisconnected())
        dispatch(actionsEditName.closeEditName())
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
                                {firstName === editFirstName
                                    ? firstName
                                    : !editFirstName
                                    ? firstName
                                    : editFirstName}
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

import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//*actions
import { actionsToken } from '../FormLogin/tokenReducer'
import { actionsProfile } from '../../pages/Profile/profileReducer'
import { actionsEditProfile } from '../FormEditName/editProfileReducer'
import { actionsEditName } from '../Button/toggleEditNameReducer'
import { actionsWidth } from './widthReducer'
//*selectors
import {
    selectToken,
    selectProfile,
    selectEditProfile,
    selectWidth,
} from '../../utils/selectors'
//*service
// import { selectInputValue } from '../../utils/selectors'
//*STYLED
import {
    MainNav,
    MainNavLogo,
    MainNavLogoImage,
    SrOnly,
    MainNavItem,
    MainNavItemLogOut,
    StyledIconProfile,
} from './styled'
import { useEffect } from 'react'

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(selectToken)

    const profile = useSelector(selectProfile)
    const { firstName } = profile.data !== null && profile.data

    const editProfile = useSelector(selectEditProfile)
    const { data } = editProfile
    const editFirstName = data !== null && data.firstName

    const width = useSelector(selectWidth)
    const { currentWidth } = width

    useEffect(() => {
        const updateDimensions = () => {
            const currentWidth = window.innerWidth
            dispatch(actionsWidth.updateWidth(currentWidth))
        }
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [dispatch, width])

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
                        <MainNavItem to="/login" $profile>
                            <StyledIconProfile>
                                <FontAwesomeIcon icon={faUserCircle} />
                            </StyledIconProfile>
                            Sign In
                        </MainNavItem>
                    ) : (
                        <div>
                            <MainNavItem to="/profile" $profile>
                                <StyledIconProfile>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </StyledIconProfile>

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
                                <StyledIconProfile $logOut>
                                    <FontAwesomeIcon icon={faSignOut} />
                                </StyledIconProfile>
                                {currentWidth !== null && currentWidth < 450
                                    ? ''
                                    : ' Sign Out'}
                            </MainNavItemLogOut>
                        </div>
                    )}
                </div>
            </MainNav>
        </header>
    )
}

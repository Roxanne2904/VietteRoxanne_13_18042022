import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//*actions
import { actionsToken } from '../FormLogin/tokenReducer'
import { actionsProfile } from '../../pages/Profile/profileReducer'
import { actionsProfileUpdate } from '../FormEditName/profileUpdateReducer'
import { actionsToggleEditForm } from '../Button/toggleEditFormReducer'
import { actionsScreenWidth } from './screenWidthReducer'
//*selectors
import {
    selectToken,
    selectProfile,
    selectProfileUpdate,
    selectScreenWidth,
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

    const profileUpdated = useSelector(selectProfileUpdate)
    const { data } = profileUpdated
    const newFirstName = data !== null && data.firstName

    const screenWidth = useSelector(selectScreenWidth)
    const { currentWidth } = screenWidth

    useEffect(() => {
        const updateDimensions = () => {
            const currentWidth = window.innerWidth
            dispatch(actionsScreenWidth.updateScreenWidth(currentWidth))
        }
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [dispatch, screenWidth])

    const handleLogOut = () => {
        dispatch(actionsToken.tokenDisconnected())
        dispatch(actionsProfile.profileDisconnected())
        dispatch(actionsProfileUpdate.profileUpdateDisconnected())
        dispatch(actionsToggleEditForm.resetToggleEditForm())
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

                                {firstName === newFirstName
                                    ? firstName
                                    : !newFirstName
                                    ? firstName
                                    : newFirstName}
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

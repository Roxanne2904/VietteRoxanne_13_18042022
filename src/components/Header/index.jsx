import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

//*STYLED
import {
    MainNav,
    MainNavLogo,
    MainNavLogoImage,
    SrOnly,
    MainNavItem,
} from './styled'

export default function Header() {
    return (
        <header>
            <MainNav>
                <MainNavLogo to="/">
                    <MainNavLogoImage src={logo} alt="Argent Bank Logo" />
                    <SrOnly>Argent Bank</SrOnly>
                </MainNavLogo>
                <div>
                    <MainNavItem to="/sign-in">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </MainNavItem>
                </div>
            </MainNav>
        </header>
    )
}

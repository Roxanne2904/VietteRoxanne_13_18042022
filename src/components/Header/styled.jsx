import { Link } from 'react-router-dom'
import styled from 'styled-components'

//*CSS
import {
    MAIN_NAV,
    MAIN_NAV_LOGO,
    MAIN_NAV_LOGO_IMG,
    MAIN_NAV_ITEM,
} from '../../utils/css/styledNav'
import { SRC_ONLY } from '../../utils/css/styledGobal'
//**/

export const MainNav = styled.nav`
    ${MAIN_NAV}
`
export const MainNavLogo = styled(Link)`
    ${MAIN_NAV_LOGO}
`

export const MainNavLogoImage = styled.img`
    ${MAIN_NAV_LOGO_IMG}
`

export const SrOnly = styled.h1`
    ${SRC_ONLY}
`
export const MainNavItem = styled(Link)`
    ${MAIN_NAV_ITEM}
`

export const MainNavItemLogOut = styled.span`
    ${MAIN_NAV_ITEM}// background: transparent;
    // border: none;
`

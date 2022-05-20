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

const size = '450px'

export const MainNav = styled.nav`
    ${MAIN_NAV}
    div {
        margin: 0 0 3px 0;
    }
`
export const MainNavLogo = styled(Link)`
    ${MAIN_NAV_LOGO}
`

export const MainNavLogoImage = styled.img`
    ${MAIN_NAV_LOGO_IMG}
    @media (max-width: ${size}) {
        width: 170px;
    }
`

export const SrOnly = styled.h1`
    ${SRC_ONLY}
`
export const MainNavItem = styled(Link)`
    ${MAIN_NAV_ITEM}
    ${(props) => props.$profile && `color: #12002b; margin-right:20px;`}
    @media (max-width: ${size}) {
        ${(props) => props.$profile && `margin-right:5px;`}
    }
`

export const MainNavItemLogOut = styled.span`
    ${MAIN_NAV_ITEM}
`

export const StyledIconProfile = styled.span`
    font-size: 1.5rem;
    color: #12002b;
    margin: 0 5px;
    position: relative;
    top: 3px;
    ${(props) => props.$logOut && `font-size: 1.3rem; top:2px; margin: 0 3px;`}
    @media (max-width: ${size}) {
        font-size: 1.2rem;
        top: 2px;
        ${(props) => props.$logOut && `font-size: 1rem;`}
    }
`

import styled from 'styled-components'
//*CSS
import { LOGIN_CONTENT } from '../../utils/css/styledLogin.jsx'
import { MAIN, BG_DARK } from '../../utils/css/styledGobal.jsx'

const size = '300px'
export const Main = styled.main`
    ${MAIN}
    ${BG_DARK}
`

export const LoginContent = styled.section`
    ${LOGIN_CONTENT}
    @media (max-width: ${size}) {
        width: inherit;
    }
`

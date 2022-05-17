import styled from 'styled-components'
//*CSS
import { LOGIN_BUTTON } from '../../utils/css/styledLogin'

const size = '720px'
const xsSize = '390px'
const mainColor = '#00bc77'

const mainPattern = `
border-color: ${mainColor};
background-color: ${mainColor};
font-weight: bold;`

export const LoginButton = styled.button`
    ${LOGIN_BUTTON}
`

export const MainButtonStyle = styled.button`
    border: ${mainColor} solid 2px;
    color: ${mainColor};
    border-radius: 5px;
    background-color: #fff;
    font-weight: bold;
    padding: 8px 10px;
    margin: 0 7.5px;
    width: 25%;
    cursor: pointer;
    @media (max-width: ${xsSize}) {
        font-size: 0.7rem;
        padding: 8px 1px;
        margin: 0 4.5px;
    }
`
export const EditNameButton = styled.button`
    ${mainPattern}
    color: #fff;
    padding: 10px;
    cursor: pointer;
    display: ${(props) => (props.close === 'close' ? 'block' : 'none')};
`
export const TransactionButton = styled.button`
    ${mainPattern}
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    margin-top: 1rem;
    color: #fff;
    cursor: pointer;
    @media (min-width: ${size}) {
        width: 200px;
    }
`

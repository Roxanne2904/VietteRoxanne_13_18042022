import styled from 'styled-components'
//*CSS
import { SIGNIN_BUTTON } from '../../utils/css/styledSignIn'

const size = '720px'
const xsSize = '390px'

export const SignInButton = styled.button`
    ${SIGNIN_BUTTON}
`

export const MainButtonStyle = styled.button`
    border: #00bc77 solid 2px;
    border-radius: 5px;
    background-color: #fff;
    color: #00bc77;
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
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    display: ${(props) => (props.close === 'close' ? 'block' : 'none')};
`
export const TransactionButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    cursor: pointer;
    @media (min-width: ${size}) {
        width: 200px;
    }
`

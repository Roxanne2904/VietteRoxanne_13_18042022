import styled from 'styled-components'
import { INPUT_WRAPPER, INPUT_REMEMBER } from '../../utils/css/styledInput'

const size = '390px'

export const InputWrapper = styled.div`
    ${INPUT_WRAPPER}
    ${(props) => props.$editName && `text-align: left; width:45%; `}
    label {
        font-weight: bold;
        ${(props) =>
            props.$editName &&
            `display: flex;
        color: #12002b;
        flex-direction: column;`}
    }
    input {
        padding: 5px;
        font-size: 1.15rem;
        ${(props) =>
            props.$editName &&
            `padding: 8px 12px; font-size: 1.05rem; border-radius:5px; border: solid grey 2px; `}
        @media (max-width: ${size}) {
            ${(props) =>
                props.$editName && `font-size: 0.85rem; padding: 4px 6px;`}
        }
    }
    input::placeholder {
        opacity: 0.4;
        font-weight: bold;
    }
`
export const InputRemember = styled.div`
    ${INPUT_REMEMBER}
`

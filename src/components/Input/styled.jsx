import styled from 'styled-components'
import { INPUT_WRAPPER, INPUT_REMEMBER } from '../../utils/css/styledInput'

export const InputWrapper = styled.div`
    ${INPUT_WRAPPER}
    ${(props) => props.$editName && `text-align: left`}
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
}
`
export const InputRemember = styled.div`
    ${INPUT_REMEMBER}
`

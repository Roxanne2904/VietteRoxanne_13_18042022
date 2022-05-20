import styled from 'styled-components'

export const StyledForm = styled.form`
    display: ${({ state }) => (state === 'open' ? 'block' : 'none')};
    color: black;
    padding: 0 20px;
`

export const StyledButtonContent = styled.div`
    display: flex;
    justify-content: center;
`
export const StyledInputContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

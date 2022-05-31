import styled from 'styled-components'

const size = '450px'

export const AccountContentWrapper = styled.div`
    width: 100%;
    flex: 1;
`
export const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
    @media (max-width: ${size}) {
        font-size: 0.9rem;
    }
`
export const AccountAmount = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    @media (max-width: ${size}) {
        font-size: 1.5rem;
    }
`
export const AccountAmountDescription = styled.p`
    margin: 0;
    @media (max-width: ${size}) {
        font-size: 0.9rem;
    }
`

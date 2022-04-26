import styled from 'styled-components'

const AccountContentWrapper = styled.div`
    width: 100%;
    flex: 1;
`
const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`
const AccountAmount = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`
const AccountAmountDescription = styled.p`
    margin: 0;
`

export default function CardTransaction({ title, amount, description }) {
    return (
        <AccountContentWrapper>
            <AccountTitle>{title}</AccountTitle>
            <AccountAmount>{amount}</AccountAmount>
            <AccountAmountDescription>{description}</AccountAmountDescription>
        </AccountContentWrapper>
    )
}

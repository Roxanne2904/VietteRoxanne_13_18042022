//*STYLED
import {
    AccountContentWrapper,
    AccountTitle,
    AccountAmount,
    AccountAmountDescription,
} from './styled'

export default function CardTransaction({ title, amount, description }) {
    return (
        <AccountContentWrapper>
            <AccountTitle>{title}</AccountTitle>
            <AccountAmount>{amount}</AccountAmount>
            <AccountAmountDescription>{description}</AccountAmountDescription>
        </AccountContentWrapper>
    )
}

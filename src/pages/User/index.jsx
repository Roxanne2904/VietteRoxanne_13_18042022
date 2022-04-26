import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

//*selectors
import { selectToken } from '../../utils/selectors'
// import { selectInputValue } from '../../utils/selectors'
import { selectProfile } from '../../utils/selectors'
//*Components
import Button from '../../components/Button/index'
import CardTransaction from '../../components/CardTransactions'
//*actions
import { fetchOrUpdateProfile } from './actions'

//*Styled
import {
    Main,
    HeaderContent,
    SrOnly,
    Account,
    AccountContentWrapperCta,
} from './styled'

export default function User() {
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const currentToken = token.data.token

    // const value = useSelector(selectInputValue)
    const profile = useSelector(selectProfile)
    const { firstName, lastName } = profile.data

    // console.log(currentToken)
    // console.log(value)
    // console.log(profile.data)

    useEffect(() => {
        dispatch(fetchOrUpdateProfile(currentToken))
    }, [currentToken, dispatch])

    return (
        <div>
            <Main>
                <HeaderContent>
                    <h1>
                        Welcome back
                        <br />
                        {`${firstName} ${lastName}`}
                    </h1>
                    <Button title="Edit Name" name="EDIT_NAME" />
                </HeaderContent>
                <SrOnly>Accounts</SrOnly>
                <Account>
                    <CardTransaction
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        description="Available Balance"
                    />
                    <AccountContentWrapperCta>
                        <Button
                            name="VIEW_TRANSACTIONS"
                            title="View transactions"
                        />
                    </AccountContentWrapperCta>
                </Account>
                <Account>
                    <CardTransaction
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        description="Available Balance"
                    />
                    <AccountContentWrapperCta>
                        <Button
                            name="VIEW_TRANSACTIONS"
                            title="View transactions"
                        />
                    </AccountContentWrapperCta>
                </Account>
                <Account>
                    <CardTransaction
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        description="Current Balance"
                    />
                    <AccountContentWrapperCta>
                        <Button
                            name="VIEW_TRANSACTIONS"
                            title="View transactions"
                        />
                    </AccountContentWrapperCta>
                </Account>
            </Main>
        </div>
    )
}

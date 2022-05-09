import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
//*selectors
import { selectToken } from '../../utils/selectors'
// import { selectInputValue } from '../../utils/selectors'
import {
    selectProfile,
    selectEditProfile,
    selectEditName,
} from '../../utils/selectors'
//*Components
import Button from '../../components/Button/index'
import CardTransaction from '../../components/CardTransactions'
import FormEditName from '../../components/FormEditName'
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

    const profile = useSelector(selectProfile)
    const { firstName, lastName } = profile.data !== null && profile.data

    const editProfile = useSelector(selectEditProfile)
    const { data } = editProfile

    const editFirstName = data !== null && data.firstName
    const editLastName = data !== null && data.lastName

    const editNameState = useSelector(selectEditName)

    // console.log(editProfile)
    // console.log(!editFirstName)

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
                        {firstName === editFirstName
                            ? firstName
                            : !editFirstName
                            ? firstName
                            : editFirstName}
                        {lastName === editLastName
                            ? ' ' + lastName
                            : !editLastName
                            ? ' ' + lastName
                            : ' ' + editLastName}
                    </h1>
                    <Button
                        title={
                            editNameState === 'open' ? 'Cancel' : 'Edit Name'
                        }
                        name="EDIT_NAME"
                    />
                    <FormEditName />
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

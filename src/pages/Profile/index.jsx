import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//*selectors
import { selectToken } from '../../utils/selectors'
// import { selectInputValue } from '../../utils/selectors'
import {
    selectProfile,
    selectEditProfile,
    selectEditName,
    selectEditValue,
} from '../../utils/selectors'
//*Components
import Button from '../../components/Button/index'
import CardTransaction from '../../components/CardTransactions'
import FormEditName from '../../components/FormEditName'
//*actions
import { fetchOrUpdateProfile } from './actions'
//service
import { test } from '../../components/FormEditName/service'
//*Styled
import {
    Main,
    HeaderContent,
    SrOnly,
    Account,
    AccountContentWrapperCta,
    MainTitle,
} from './styled'

export default function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const currentToken = token.data !== null && token.data.token

    const profile = useSelector(selectProfile)
    const { firstName, lastName } = profile.data !== null && profile.data

    const editProfile = useSelector(selectEditProfile)
    const editDataProfile = editProfile.data !== null && editProfile.data

    const editValue = useSelector(selectEditValue)
    const { editFirstName, editLastName } = editValue

    const editNameState = useSelector(selectEditName)

    // console.log(editProfile)
    // console.log(!editFirstName)

    useEffect(() => {
        if (!token.data) {
            navigate('/login')
        }
        dispatch(fetchOrUpdateProfile(currentToken))
    }, [dispatch, navigate, token.data, currentToken])

    // console.log(!token.data)
    return !token.data ? (
        '...'
    ) : (
        <div>
            <Main>
                <HeaderContent>
                    <MainTitle state={editNameState}>
                        Welcome back
                        <br />
                        {editNameState === 'open'
                            ? ''
                            : test(
                                  firstName,
                                  editFirstName,
                                  editDataProfile.firstName
                              )}
                        {editNameState === 'open'
                            ? ''
                            : ' ' +
                              test(
                                  lastName,
                                  editLastName,
                                  editDataProfile.lastName
                              )}
                    </MainTitle>
                    <Button
                        title="Edit Name"
                        //{
                        //     editNameState === 'open' ? 'Cancel' : 'Edit Name'
                        // }
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

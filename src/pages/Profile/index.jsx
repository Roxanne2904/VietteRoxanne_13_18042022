import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//*selectors
import {
    selectToken,
    selectProfile,
    selectProfileUpdate,
    selectToggleEditForm,
    selectInputValuesToUpdate,
} from '../../utils/selectors'
//*Components
import Button from '../../components/Button/index'
import CardTransaction from '../../components/CardTransactions'
import FormEditName from '../../components/FormEditName'
import Error from '../Error'
//*actions
import { fetchOrUpdateProfile } from './actions'
//*service
import { CheckAndUpdateTheName } from '../../components/FormEditName/service'
//*Styled
import {
    Main,
    HeaderContent,
    SrOnly,
    Account,
    AccountContentWrapperCta,
    MainTitle,
    StyledUpdatingTxt,
} from './styled'

export default function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const currentToken = token.data !== null && token.data.token

    const profile = useSelector(selectProfile)
    const { firstName, lastName } = profile.data !== null && profile.data

    const profileUpdated = useSelector(selectProfileUpdate)
    const profileUpdatedDatas =
        profileUpdated.data !== null && profileUpdated.data

    const inputValuesToUpdate = useSelector(selectInputValuesToUpdate)
    const { firstNameEdited, lastNameEdited } = inputValuesToUpdate

    const toggleEditForm = useSelector(selectToggleEditForm)

    // console.log(editProfile)
    // console.log(token.data)

    useEffect(() => {
        if (!token.data) {
            navigate('/login')
        }
        dispatch(fetchOrUpdateProfile(currentToken))
    }, [dispatch, navigate, token.data, currentToken])

    // console.log(profileUpdated)

    return !token.data ? (
        '...'
    ) : profile.status !== 'rejected' ? (
        <div>
            <Main>
                <HeaderContent>
                    <MainTitle state={toggleEditForm}>
                        Welcome back
                        <br />
                        {toggleEditForm === 'open'
                            ? ''
                            : CheckAndUpdateTheName(
                                  firstName,
                                  firstNameEdited,
                                  profileUpdatedDatas.firstName
                              )}
                        {toggleEditForm === 'open'
                            ? ''
                            : ' ' +
                              CheckAndUpdateTheName(
                                  lastName,
                                  lastNameEdited,
                                  profileUpdatedDatas.lastName
                              )}
                        {profileUpdated.status === 'pending' ||
                        profileUpdated.status === 'updating' ? (
                            <StyledUpdatingTxt>
                                name update in progress <br />
                                ...
                            </StyledUpdatingTxt>
                        ) : (
                            ''
                        )}
                    </MainTitle>
                    <Button
                        title="Edit Name"
                        //{
                        //     editNameState === 'open' ? 'Cancel' : 'Edit Name'
                        // }
                        name="EDIT_FORM"
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
    ) : (
        <Error />
    )
}

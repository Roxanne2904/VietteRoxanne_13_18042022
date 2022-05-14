import Input from '../Input'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
//*components
import Button from '../Button'
//*selectors
import {
    selectEditName,
    selectEditValue,
    selectProfile,
    selectToken,
    selectEditProfile,
} from '../../utils/selectors'
//*actions
import { getEditFirstName, getEditLastName } from './editValueReducer'
import { fetchOrUpdateEditProfile } from './actions'
import { toggleUpdateName } from '../Button/actions'
import { resetToInitialState } from './editValueReducer'
import { actionsEditName } from '../Button/toggleEditNameReducer'
//*service
import { test } from './service'

const StyledForm = styled.form`
    display: ${({ state }) => (state === 'open' ? 'block' : 'none')};
    color: black;
    padding: 0 20px;
`

const StyledButtonContent = styled.div`
    display: flex;
    justify-content: center;
`
const StyledInputContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export default function FormEditName() {
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const currentToken = token.data.token

    const profile = useSelector(selectProfile)
    const { data } = profile
    console.log(data)
    const { firstName, lastName } = data !== null && data

    const editProfile = useSelector(selectEditProfile)
    const editDataProfile = editProfile.data !== null && editProfile.data

    const editValue = useSelector(selectEditValue)
    const { editFirstName, editLastName } = editValue

    const editNameState = useSelector(selectEditName)

    // function test(data, editValue, editData) {
    //     if (editValue !== null && editValue !== '') {
    //         return editValue
    //     } else {
    //         if (editData !== undefined) {
    //             return editData
    //         }
    //         return data
    //     }
    // }

    // console.log('le prénom lors du login' + '     ' + firstName)
    // console.log('la value input' + '     ' + editFirstName)
    // console.log(
    //     'le nouveau prénom stocké' + '     ' + editDataProfile.firstName
    // )

    // test(firstName, editFirstName, editDataProfile.firstName)
    // test(lastName, editLastName, editDataProfile.lastName)

    // console.log(editDataProfile)

    const handleEditName = (e) => {
        e.preventDefault()
        dispatch(
            fetchOrUpdateEditProfile(
                currentToken,
                test(firstName, editFirstName, editDataProfile.firstName),
                test(lastName, editLastName, editDataProfile.lastName)
            )
        )
        dispatch(
            toggleUpdateName(
                actionsEditName.toggleEditName(),
                resetToInitialState()
            )
        )
    }

    return (
        <StyledForm onSubmit={handleEditName} noValidate state={editNameState}>
            <StyledInputContent>
                <Input
                    label="First Name"
                    type="text"
                    id="firstName"
                    autoComplete="on"
                    event={(e) => dispatch(getEditFirstName(e.target.value))}
                    value={editFirstName !== null ? editFirstName : ''}
                    placeholder={test(
                        firstName,
                        editFirstName,
                        editDataProfile.firstName
                    )}
                />

                <Input
                    label="Name"
                    type="text"
                    id="name"
                    autoComplete="on"
                    event={(e) => dispatch(getEditLastName(e.target.value))}
                    value={editLastName !== null ? editLastName : ''}
                    placeholder={test(
                        lastName,
                        editLastName,
                        editDataProfile.lastName
                    )}
                />
            </StyledInputContent>

            <StyledButtonContent>
                <Button title={'Save'} name="SAVE" />
                <Button title={'Cancel'} name="CANCEL" />
            </StyledButtonContent>
        </StyledForm>
    )
}

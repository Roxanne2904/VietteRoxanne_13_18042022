import Input from '../Input'
import { useSelector, useDispatch } from 'react-redux'
//*components
import Button from '../Button'
//*selectors
import {
    selectToggleEditForm,
    selectInputValuesToUpdate,
    selectProfile,
    selectToken,
    selectProfileUpdate,
} from '../../utils/selectors'
//*actions
import {
    getFirstNameEdited,
    getLastNameEdited,
} from './InputValuesToUpdateReducer'

import { resetToInitialState } from './InputValuesToUpdateReducer'
import { actionsEditForm } from '../Button/toggleEditFormReducer'
import { handleFetchOrUpdateProfileUpdate } from './actions'
import { handleToggleEditFormAndResetEditValues } from './actions'
//*service
import { CheckAndUpdateTheName } from './utilsFunctions'
//*styled
import { StyledForm, StyledButtonContent, StyledInputContent } from './styled'

export default function FormEditName() {
    const dispatch = useDispatch()

    const token = useSelector(selectToken)
    const currentToken = token.data.token

    const profile = useSelector(selectProfile)
    const { data } = profile
    const { firstName, lastName } = data !== null && data

    const profileUpdated = useSelector(selectProfileUpdate)
    const profileUpdatedDatas =
        profileUpdated.data !== null && profileUpdated.data

    const inputValuesToUpdate = useSelector(selectInputValuesToUpdate)
    const { firstNameEdited, lastNameEdited } = inputValuesToUpdate

    const string_strToggleEditForm = useSelector(selectToggleEditForm)

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

    const handleNamesUpdate = (e) => {
        e.preventDefault()
        dispatch(
            handleFetchOrUpdateProfileUpdate(
                currentToken,
                firstName,
                firstNameEdited,
                profileUpdatedDatas.firstName,
                lastName,
                lastNameEdited,
                profileUpdatedDatas.lastName
            )
        )
        dispatch(
            handleToggleEditFormAndResetEditValues(
                actionsEditForm.toggleEditForm(),
                resetToInitialState()
            )
        )
        // dispatch(
        //     fetchOrUpdateProfileUpdate(
        //         currentToken,
        //         CheckAndUpdateTheName(
        //             firstName,
        //             editFirstName,
        //             profileUpdateDatas.firstName
        //         ),
        //         CheckAndUpdateTheName(
        //             lastName,
        //             editLastName,
        //             profileUpdateDatas.lastName
        //         )
        //     )
        // )
        // dispatch(
        //     toggleEditFormAndResetEditValues(
        //         actionsEditForm.toggleEditForm(),
        //         resetToInitialState()
        //     )
        // )
    }

    return (
        <StyledForm
            onSubmit={handleNamesUpdate}
            noValidate
            state={string_strToggleEditForm}
        >
            <StyledInputContent>
                <Input
                    label="First Name"
                    type="text"
                    id="firstName"
                    autoComplete="on"
                    event={(e) => dispatch(getFirstNameEdited(e.target.value))}
                    value={firstNameEdited !== null ? firstNameEdited : ''}
                    placeholder={CheckAndUpdateTheName(
                        firstName,
                        firstNameEdited,
                        profileUpdatedDatas.firstName
                    )}
                />

                <Input
                    label="Name"
                    type="text"
                    id="name"
                    autoComplete="on"
                    event={(e) => dispatch(getLastNameEdited(e.target.value))}
                    value={lastNameEdited !== null ? lastNameEdited : ''}
                    placeholder={CheckAndUpdateTheName(
                        lastName,
                        lastNameEdited,
                        profileUpdatedDatas.lastName
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

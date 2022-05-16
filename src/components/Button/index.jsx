// import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
//*actions
import { actionsEditForm } from './toggleEditFormReducer'
import { resetToInitialState } from '../FormEditName/editValuesReducer'
//*selectors
import { selectToggleEditForm } from '../../utils/selectors'
//*actions
import { toggleEditFormAndResetEditValues } from './actions'

//*styled
import {
    SignInButton,
    MainButtonStyle,
    EditNameButton,
    TransactionButton,
} from './styled'

export default function Button({ title, name }) {
    const dispatch = useDispatch()

    const toggleEditForm = useSelector(selectToggleEditForm)
    // console.log(editNameState)

    // const toggleUpdateName = () => {
    //     dispatch(actionsEditName.toggleEditName())
    //     dispatch(resetToInitialState())
    // }

    switch (name) {
        case 'LOGIN':
            return <SignInButton>{title}</SignInButton>
        case 'EDIT_NAME':
            return (
                <EditNameButton
                    close={toggleEditForm}
                    onClick={() =>
                        dispatch(
                            toggleEditFormAndResetEditValues(
                                actionsEditForm.toggleEditForm(),
                                resetToInitialState()
                            )
                        )
                    }
                >
                    {title}
                </EditNameButton>
            )
        case 'VIEW_TRANSACTIONS':
            return <TransactionButton>{title}</TransactionButton>

        case 'SAVE':
            return <MainButtonStyle type="submit">{title}</MainButtonStyle>
        case 'CANCEL':
            return (
                <MainButtonStyle
                    type="button"
                    onClick={() =>
                        dispatch(
                            toggleEditFormAndResetEditValues(
                                actionsEditForm.toggleEditForm(),
                                resetToInitialState()
                            )
                        )
                    }
                >
                    {title}
                </MainButtonStyle>
            )
        default:
            return
    }
}

import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
//*actions
import { actionsEditForm } from './toggleEditFormReducer'
import { toggleEditFormAndResetEditValues } from './actions'
//*actionsEditValues
import { resetToInitialState } from '../FormEditName/editValuesReducer'
//*selectors
import { selectToggleEditForm } from '../../utils/selectors'
//*styled
import {
    LoginButton,
    MainButtonStyle,
    EditNameButton,
    TransactionButton,
} from './styled'

export default function Button({ title, name }) {
    const dispatch = useDispatch()
    const string_strToggleEditForm = useSelector(selectToggleEditForm)

    switch (name) {
        case 'LOGIN':
            return <LoginButton>{title}</LoginButton>
        case 'EDIT_FORM':
            return (
                <EditNameButton
                    close={string_strToggleEditForm}
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

Button.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

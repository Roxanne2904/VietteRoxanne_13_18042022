// import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
//*actions
import { actionsEditName } from './toggleEditNameReducer'
import { resetToInitialState } from '../FormEditName/editValueReducer'
//*selectors
import { selectEditName } from '../../utils/selectors'
//*actions
import { toggleUpdateName } from './actions'

//*styled
import {
    SignInButton,
    MainButtonStyle,
    EditNameButton,
    TransactionButton,
} from './styled'

export default function Button({ title, name }) {
    const dispatch = useDispatch()

    const editNameState = useSelector(selectEditName)
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
                    close={editNameState}
                    onClick={() =>
                        dispatch(
                            toggleUpdateName(
                                actionsEditName.toggleEditName(),
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
                            toggleUpdateName(
                                actionsEditName.toggleEditName(),
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

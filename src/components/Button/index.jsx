import styled from 'styled-components'
import { useDispatch } from 'react-redux'
//*actions
import { actionsEditName } from './toggleEditNameReducer'
import { resetToInitialState } from '../FormEditName/editValueReducer'

const size = '720px'

const EditNameButton = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
`
const TransactionButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    @media (min-width: ${size}) {
        width: 200px;
    }
`

export default function Button({ title, name }) {
    const dispatch = useDispatch()

    const toggleUpdateName = () => {
        dispatch(actionsEditName.toggleEditName())
        dispatch(resetToInitialState())
    }

    switch (name) {
        case 'EDIT_NAME':
            return (
                <EditNameButton onClick={() => toggleUpdateName()}>
                    {title}
                </EditNameButton>
            )
        case 'VIEW_TRANSACTIONS':
            return <TransactionButton>{title}</TransactionButton>

        case 'EDIT':
            return <EditNameButton>{title}</EditNameButton>
        default:
            return
    }
}

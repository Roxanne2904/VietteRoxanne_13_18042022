import styled from 'styled-components'

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
    switch (name) {
        case 'EDIT_NAME':
            return <EditNameButton>{title}</EditNameButton>
        case 'VIEW_TRANSACTIONS':
            return <TransactionButton>{title}</TransactionButton>
        default:
            return
    }
}

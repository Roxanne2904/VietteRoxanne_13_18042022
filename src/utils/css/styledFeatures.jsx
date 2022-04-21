const size = '920px'

export const FEATURES = `
    display: flex;
    flex-direction: column;
    @media (min-width: ${size}) {
        flex-direction: row;
    }
`
export const FEATURES_ITEM = `
    flex: 1;
    padding: 2.5rem;
`
export const FEATURES_ICON = `
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
`
export const FEATURE_ITEM_TITLE = `
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`

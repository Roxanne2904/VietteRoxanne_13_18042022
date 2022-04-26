export const selectToken = (state) => {
    let tokenState = state.persistedReducer.token
    return tokenState
}

export const selectInputValue = (state) => {
    let inputValueState = state.persistedReducer.inputValue
    return inputValueState
}

export const selectProfile = (state) => {
    let profileState = state.persistedReducer.profile
    return profileState
}

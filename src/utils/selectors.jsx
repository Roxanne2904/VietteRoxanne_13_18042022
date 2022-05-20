export const selectToken = (state) => {
    let tokenState = state.persistedReducer.token
    return tokenState
}

export const selectProfile = (state) => {
    let profileState = state.persistedReducer.profile
    return profileState
}

export const selectProfileUpdate = (state) => {
    let profileUpdateState = state.persistedReducer.profileUpdate
    return profileUpdateState
}

export const selectloginInputValues = (state) => {
    let loginInputValuesState = state.persistedReducer.loginInputValues
    return loginInputValuesState
}
export const selectInputValuesToUpdate = (state) => {
    let InputValuesToUpdateState = state.persistedReducer.InputValuesToUpdate
    return InputValuesToUpdateState
}

export const selectToggleEditForm = (state) => {
    let toggleEditForm = state.persistedReducer.toggleEditForm
    return toggleEditForm
}

export const selectScreenWidth = (state) => {
    let screenWidth = state.persistedReducer.screenWidth
    return screenWidth
}

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

export const selectLoginValues = (state) => {
    let loginValueState = state.persistedReducer.loginValues
    return loginValueState
}
export const selectEditValues = (state) => {
    let editValueState = state.persistedReducer.editValues
    return editValueState
}

export const selectToggleEditForm = (state) => {
    let toggleEditForm = state.persistedReducer.toggleEditForm
    return toggleEditForm
}

export const selectScreenWidth = (state) => {
    let screenWidth = state.persistedReducer.screenWidth
    return screenWidth
}

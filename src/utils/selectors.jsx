export const selectToken = (state) => {
    let tokenState = state.persistedReducer.token
    return tokenState
}

export const selectProfile = (state) => {
    let profileState = state.persistedReducer.profile
    return profileState
}

export const selectEditProfile = (state) => {
    let editProfileState = state.persistedReducer.editProfile
    return editProfileState
}

export const selectSigninValue = (state) => {
    let signinValueState = state.persistedReducer.signinValue
    return signinValueState
}
export const selectEditValue = (state) => {
    let editValueState = state.persistedReducer.editValue
    return editValueState
}

export const selectEditName = (state) => {
    let editNameState = state.persistedReducer.editName
    return editNameState
}

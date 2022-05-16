export const toggleEditFormAndResetEditValues = (
    actionsEditForm,
    actionsEditValue
) => {
    return async (dispatch) => {
        dispatch(actionsEditForm)
        dispatch(actionsEditValue)
    }
}

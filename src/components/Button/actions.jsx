export const toggleUpdateName = (actionsEditName, actionsEditValue) => {
    return async (dispatch) => {
        dispatch(actionsEditName)
        dispatch(actionsEditValue)
    }
}

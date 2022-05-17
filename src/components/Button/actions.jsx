/**
 * This async function allows you to set up the thunk middleware to use dispatch
 * and activate the action to toggle the edit form to "open" or "close".
 * It also reset of the values of the edit form inputs
 * @param { Object } actionFromToggleEditForm An action from toggleEditForm reducer
 * @param { Object } actionFromEditValues An action from editValues reducer
 * @returns { Async Function } It return an async function using redux thunk
 */

export const toggleEditFormAndResetEditValues = (
    actionFromToggleEditForm,
    actionFromEditValues
) => {
    return async (dispatch) => {
        dispatch(actionFromToggleEditForm)
        dispatch(actionFromEditValues)
    }
}

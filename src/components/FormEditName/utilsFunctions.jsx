/**
 * It returns the correct string after the action of updating the first or last name.
 * @param { String } data Data is the current data in the database before the update.
 * @param { String } InputValuesToUpdate InputValuesToUpdate is the current value in the input that is used to update.
 * @param { String } dataUpdated DataUpdated is the new data in the database after the update.
 * @returns { String }
 */

export function CheckAndUpdateTheName(data, InputValuesToUpdate, dataUpdated) {
    if (InputValuesToUpdate !== null && InputValuesToUpdate !== '') {
        return InputValuesToUpdate
    } else {
        if (dataUpdated !== undefined) {
            return dataUpdated
        }
        return data
    }
}

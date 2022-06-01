/**
 * It returns the correct string after the action of updating the first or last name.
 * @param { String } data Data is the current data in the database before the update.
 * @param { String } InputValuesToUpdate InputValuesToUpdate is the current value in the input that is used to update.
 * @param { String } dataUpdated DataUpdated is the new data in the database after the update.
 * @returns { String }
 */

export function CheckAndUpdateTheName(data, InputValuesToUpdate, dataUpdated) {
    //*La donnée prioritaire est celle de l'input */
    if (InputValuesToUpdate !== null && InputValuesToUpdate !== '') {
        return InputValuesToUpdate
    } else {
        //*La donnée secondaire est celle qui a été récement mis à jour et qui a été stocké dans le store avec le reducer ProfileUpdated */
        if (dataUpdated !== undefined) {
            return dataUpdated
        }
        //* et enfin en dernière solution on récupère la donnée récupérer lors de la connexion */
        return data
    }
}

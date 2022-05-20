export function CheckAndUpdateTheName(data, editValue, updateData) {
    if (editValue !== null && editValue !== '') {
        return editValue
    } else {
        if (updateData !== undefined) {
            return updateData
        }
        return data
    }
}

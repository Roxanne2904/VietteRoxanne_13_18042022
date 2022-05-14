export function test(data, editValue, editData) {
    if (editValue !== null && editValue !== '') {
        return editValue
    } else {
        if (editData !== undefined) {
            return editData
        }
        return data
    }
}

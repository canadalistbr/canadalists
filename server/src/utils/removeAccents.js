function removeAccents(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function normalizeEntityName(string) {
    return removeAccents(string).toLowerCase()
}

module.exports = {
    removeAccents,
    normalizeEntityName
}
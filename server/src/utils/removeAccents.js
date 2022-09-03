function removeAccents(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeEntityName(string) {
  return removeAccents(string).toLowerCase();
}

function removeSpaces(string) {
  return string.replace(/\s/g, "");
}

module.exports = {
  removeAccents,
  normalizeEntityName,
  removeSpaces
};

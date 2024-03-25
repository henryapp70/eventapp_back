function removeDuplicates(array) {
  const uniqueObjects = new Set(array.map((obj) => JSON.stringify(obj)));

  const uniqueArray = Array.from(uniqueObjects, (strObj) => JSON.parse(strObj));

  return uniqueArray;
}

module.exports = removeDuplicates;
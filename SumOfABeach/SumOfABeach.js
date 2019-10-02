function sumOfABeach(string) {
  const stringToLowerCase = string.toLowerCase();
  const findSandinString = stringToLowerCase.match(/sand/g);
  const findWaterinString = stringToLowerCase.match(/water/g);
  const findFishinString = stringToLowerCase.match(/fish/g);
  const findSuninString = stringToLowerCase.match(/sun/g);

  let counter = 0;
  if (findSandinString) {
    counter += findSandinString.length;
  }
  if (findWaterinString) {
    counter += findWaterinString.length;
  }
  if (findFishinString) {
    counter += findFishinString.length;
  }
  if (findSuninString) {
    counter += findSuninString.length;
  }
  return counter;
}

module.exports = sumOfABeach;

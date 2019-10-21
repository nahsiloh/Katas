function duplicateEncode(word) {
  for (let i = 0; i < word.length; i++) {
    const regex = new RegExp(word[i], "gi");
    if (word.match(regex).length > 1) {
      word[i].replace(regex, ")");
    } else {
      word[i].replace(regex, "(");
    }
  }
  console.log(word);

  // const regex = new RegExp(char, "gi");
  // return word.replace(regex, "(((");
}
duplicateEncode("din");

module.exports = duplicateEncode;

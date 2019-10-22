function duplicateEncode(word) {
  // console.log(word[0].match(regex))
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    const regex = new RegExp(word[i], "gi");
    if (word.match(regex).length > 1) {
      newWord += word[i].replace(regex, ")");
    } else {
      newWord += word[i].replace(regex, "(");
    }
  }
  return newWord;

  //   var invalid = /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g;
  // var repl = toCheck.replace(invalid, "");

  // const regex = new RegExp(char, "gi");
  // return word.replace(regex, "(((");
}
console.log(duplicateEncode("aabc"));

module.exports = duplicateEncode;

// console.log("hello");

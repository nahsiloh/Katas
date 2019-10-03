function whoLikesIt(names) {
  const numberOfNames = names.length;
  if (numberOfNames === 0) {
    return `no one likes this`;
  } else if (numberOfNames === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (numberOfNames === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (numberOfNames >= 4) {
    return `${names[0]}, ${names[1]} and ${numberOfNames - 2} others like this`;
  } else {
    return `${names} likes this`;
  }
}

module.exports = whoLikesIt;

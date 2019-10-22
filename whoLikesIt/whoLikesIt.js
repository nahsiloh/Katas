// function whoLikesIt(names) {
//   const numberOfNames = names.length;
//   if (numberOfNames === 0) {
//     return `no one likes this`;
//   } else if (numberOfNames === 1) {
//     return `${names} likes this`;
//   } else if (numberOfNames === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (numberOfNames === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (numberOfNames >= 4) {
//     return `${names[0]}, ${names[1]} and ${numberOfNames - 2} others like this`;
//   }
// }
function whoLikesIt(names) {
  const numberOfNames = names.length;

  const statements = {
    0: "no one likes this",
    1: `${names} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${numberOfNames - 2} others like this`
  };

  const key = Math.min(4, names.length);

  return statements[key];
}

module.exports = whoLikesIt;

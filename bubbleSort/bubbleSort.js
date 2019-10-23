// Idea:
// Loop thru each element
// keep swapping the larger element till the end.
// After first loop the largest element will be the last element.
// Repeat this time but exclude the last element.
// Do it for the number of times based on the number of items you in the array
// All items will be sorted.

// module.exports.bubbleSort = array => {
// // loop thru each element from the first till the last, with index as i
// // loop thru each element from the second till the last element - i, with index as j
// // if element in j is smaller than j - 1, swap them.

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  // array.forEach(item, i, array => {
  //   console.log(i);
  // });
  return array;
}

module.exports = bubbleSort;

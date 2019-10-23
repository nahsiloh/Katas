Most basic of all sorting algorithm
Worst Case: O(n2)
Best Case: O(n2)
Average Case: O(n2)
Advantage: Easy to do, Easy to understand, Best and Worst case have same run time making it predictable.
Disadvantage: One of the slowest sort algorithm even among other O(n2) sort algorithm.

Idea:
Loop thru each element
keep swapping the larger element till the end.
After first loop the largest element will be the last element.
Repeat this time but exclude the last element.
Do it for the number of times based on the number of items you in the array
All items will be sorted.

module.exports.bubbleSort = array => {
// loop thru each element from the first till the last, with index as i
// loop thru each element from the second till the last element - i, with index as j
// if element in j is smaller than j - 1, swap them.

// return the sorted array at the end
};

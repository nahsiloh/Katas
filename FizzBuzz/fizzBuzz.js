function fizzBuzz(number) {
  const isMultipleOfThree = number % 3 === 0
  const isMultipleOfFive = number % 5 === 0

  if (isMultipleOfThree && isMultipleOfFive) {
    return 'FizzBuzz'
  }

  if (isMultipleOfThree) {
    return 'Fizz'
  }

  if (isMultipleOfFive) {
    return 'Buzz'
  }

  return number
}

module.exports = fizzBuzz
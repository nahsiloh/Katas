const fizzBuzz = require('./fizzBuzz')

describe('FizzBuzz', () => {
  describe('Multiples of 3', () => {
    it('should return fizz when number is 3', () => {
      expect(fizzBuzz(3)).toBe("Fizz")
    })

    it('should return fizz when number is 6', () => {
      expect(fizzBuzz(6)).toBe("Fizz")
    })

    it('should return fizz when number is 9', () => {
      expect(fizzBuzz(9)).toBe("Fizz")
    })

  })

  describe('Multiples of 5', () => {
    it('should return buzz when number is 5', () => {
      expect(fizzBuzz(5)).toBe("Buzz")
    })

    it('should return buzz when number is 10', () => {
      expect(fizzBuzz(10)).toBe("Buzz")
    })
  })

  describe('Multiples of 3 and 5', () => {
    it('should return buzz when number is 15', () => {
      expect(fizzBuzz(15)).toBe("FizzBuzz")
    })
  })

  describe('All other numbers', () => {
    it('should return 1 when number is 1', () => {
      expect(fizzBuzz(1)).toBe(1)
    })
  })
})
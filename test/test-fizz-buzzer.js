// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
  // Test the normal case
  it('Should return fizz-buzz, buzz or fizz depending on the numerical input', () => {
    // range of normal inputs, including
    // notable cases for fizz-buzz, buzz or fizz
    const normalCases = [
      {num: 15, expected:"fizz-buzz"},
      {num: 5, expected: "buzz"},
      {num: 3, expected: "fizz"}
    ];
    // for each set of inputs (num), `fizzbuzzer` should
    // produce the expected value
    normalCases.forEach((input) => {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('Should raise error if arg is not a number', () => {
    const badInputs = [
      ['hello'],
      ['15'],
      ['five'],
      ['three']
    ];
    // prove that an error is reaised for bad badInputs
    badInputs.forEach((input) => {
      expect(() => {
      fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});

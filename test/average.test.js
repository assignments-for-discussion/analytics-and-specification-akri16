const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', () => {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', () => {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', () => {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

describe('Check if the function detects when the sensor is faulty', () => {
  it('reports the average as NaN when more than 75% of the reading are NaN',
      () => {
        expect(average([NaN, NaN, NaN, NaN, NaN, 1, NaN])).to.be.NaN;
      });
});

describe('Checks if the function removes outliers', () => {
  it(`Checks if the function removes outliers`, () => {
    const data = [1, 2, 3, 6, 3600];
    expect(average(data)).to.be.approximately(3, 0.01);
  });
});

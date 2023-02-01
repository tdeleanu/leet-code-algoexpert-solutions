/**
 * @param {number[]} num
 * @return {number[]}
 */
var productExceptSelf = (num) => {
  let products = new Array(num.length).fill(1);
  let rp1 = 1;
  let rp2 = 1;

  for (let i = 0; i < num.length; i++) {
    products[i] *= rp1;
    rp1 *= num[i];
    products[num.length - 1 - i] *= rp2;
    rp2 *= num[num.length - 1 - i];
  }
  return products;
}


const assert = require('assert');

const testCases = [{
  input: [5, 1, 4, 2],
  expected: [8, 40, 10, 20]
},
{
  input: [1, 2, 3, 4],
  expected: [24, 12, 8, 6]
},
{
  input: [10, 20, 30, 40],
  expected: [24000, 12000, 8000, 6000]
},
{
  input: [3, 2, 1],
  expected: [2, 3, 6]
},
{
  input: [3, 2, 1, 0],
  expected: [0, 0, 0, 6]
},
{
  input: [1],
  expected: [1]
}
];

testCases.forEach(({ input, expected }) => {
  assert.deepEqual(productExceptSelf(input), expected);
});
console.log('All test cases pass.');
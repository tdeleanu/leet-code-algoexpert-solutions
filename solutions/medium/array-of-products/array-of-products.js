/*
It's using the same idea of iterating twice in the same loop but this time it uses two separate variables: rp1 and rp2 to keep track of left and right running product respectively.
The first half of the loop is similar to the previous solution, it calculates the left product of each element and store it in the result array products.
The second half of the loop is also similar, it calculates the right product of each element by iterating from the end of the array towards the beginning, and it also stores it in the result array products.
It's also using Array.fill(1) to fill the result array with 1s which is more efficient than looping to fill the array with 1s.
This solution is also efficient in terms of time and space complexity, and it's a good way to solve this problem.

Sure, this code defines a function productExceptSelf which takes an input array num and returns an array of products of all elements in the input array except the element at the current index.

It starts by creating an array products with the same length as the input array and initializing all elements to 1.

Then it declares two variables rp1 and rp2 which will keep track of the running product of the left and right side of the current index respectively. Both variables are initialized to 1.

It then iterates through the input array with a for loop.

In each iteration, it first multiplies the element at the current index in the products array with the current value of rp1 and then updates the value of rp1 by multiplying it with the current element of the input array num.

Then it accesses the element at the current index from the end of the array in the products array using num.length - 1 - i and multiplies it with the current value of rp2. And then updates the value of rp2 by multiplying it with the current element of the input array num from the end.

At the end of the loop, it returns the products array which now contains the products of all elements in the input array except the element at the current index.

As a software architect, I would explain this code as a solution for generating an array of products for all elements in a given input array, with the exception of the element at the current index. The solution is implemented in JavaScript and leverages the functional programming paradigm, utilizing a single for loop to iterate through the input array.

The function productExceptSelf takes in a single argument, an array of integers representing the input data. This function first creates an array of the same length as the input array and populates it with the value of 1. This array will later be used to store the final products.

Two variables are defined to keep track of the running product of the elements on the left and right side of the current index. These variables are initialized to 1 and are updated with each iteration of the loop.

The for loop iterates through the input array, in each iteration, it first multiplies the element at the current index in the products array with the running product of the left side and updates the running product of the left side by multiplying it with the current element of the input array.

Then it multiplies the element at the current index from the end of the array in the products array with the running product of the right side and updates the running product of the right side by multiplying it with the current element of the input array from the end.

At the end of the loop, the function returns the products array, which contains the product of all elements in the input array except the element at the current index. This solution is efficient in terms of time complexity, O(n) and space O(1), as it utilizes a single loop and only uses a constant amount of extra space.
*/

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
        rp2 *= num[num.length-1-i];
    }
    return products;
}


const assert = require('assert');

const testCases = [  {    input: [5, 1, 4, 2],
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
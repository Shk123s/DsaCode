// function power(n1) {
//   let temp =1
//   for (let i = 0; i < n1; i++) {
//     temp = temp *2 ;
//   }
//   return temp;
// }

// console.log(power(10));
// console.log(power(5));
function powerOfTwoRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * powerOfTwoRecursive(base, exponent - 1);
  }
}

// Example usage
console.log(powerOfTwoRecursive(2, 4)); // Output: 8 (2^3)
console.log(powerOfTwoRecursive(2, 3)); // Output: 8 (2^3)
console.log(powerOfTwoRecursive(2, 5)); // Output: 32 (2^5)

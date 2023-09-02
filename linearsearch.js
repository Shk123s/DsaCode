// function linearsearch(n) {
//   let arr = [-5, 2, 10, 4, 6];
//   for (let i = 0; i < arr.length; i++) {
//     let anser = arr[i];
//     if (arr[i] == n) {
//       return arr.indexOf(anser);
//     }
//   }
//   return  -1;
// }
function linearsearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearsearch([-5, 2, 10, 4, 6], 4));
console.log(linearsearch([-5, 2, 10, 4, 6], 10));
console.log(linearsearch([-5, 2, 10, 4, 6], 100));
console.log(linearsearch([-5, 2, 10, 4, 6], 6));

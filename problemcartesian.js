function cartesian(arr1, arr2) {
  let axb = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        axb.push([arr1[i], arr2[j]]);
    }
  }

  return axb;
}
arr1 = [1, 2];
arr2 = [3, 4,5];

console.log(cartesian(arr1, arr2));

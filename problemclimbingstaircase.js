function staircase(n) {
  let arr = [1,2];
  if (n < 2) {
    return arr;
  }
  for (let i = 2; i <=n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }

  return arr[n-1];
}
console.log(staircase(4)); //(1,1,1)(1,2)and (2,1);

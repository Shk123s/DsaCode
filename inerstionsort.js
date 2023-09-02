function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numbetToinsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numbetToinsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numbetToinsert;
  }
}
const arr = [8, 20, -2, 4, -5];
insertionsort(arr);
console.log(arr);

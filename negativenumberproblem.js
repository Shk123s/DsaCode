function arrangenegative(n) {

    let left = [];
  
    let right = [];
    // let mid = Math.floor(n / 2);
  
    let temp = [];
  
    for (let i = 0; i < n.length; i++) {
      if (n[i] < 0) {
  
        left.push(n[i]);
      }
      else {
        right.push(n[i]);
      }
  
    }
    temp = [...left, ...right];
    return console.log(temp);
  
  
  }
  const n = [1, 2, -4, -5, 2, -7, 3, 2, -6, -8, -9, 3, 2, 1]
  arrangenegative(n);
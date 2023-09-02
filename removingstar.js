function removeStar(s) {
  let item = [];

  let arr = s.split("");
  item.push(...arr);

  for (let i = 0; i < item.length; i++) {
    if (item[i] === "*") {
      // console.log(item[i]);
      if (i > 0) {
        item.splice(i - 1, 2);
        i = i - 2;
        //   console.log(item);
      } else {
        item.splice(i, 1);
        i--;
      }
    }
  }
   console.log(item.join("").toString());

}

removeStar("leet**cod*e");
removeStar("erase*****");

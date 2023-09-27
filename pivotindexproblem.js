function pivotIndex(nums)
{ 
    const   total = nums.reduce(function(a,b){ return a+b ;});
  let  left =  0;
   


  for (let i = 0; i < nums.length; i++) {
     
     if (left === total - left - nums[i]) {
       
       return  console.log(i);
     }
     
         left = left + nums[i];
     
    }
    return -1;
}

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
// const pivotIndex1 = pivotIndex(nums);
// if (pivotIndex !== -1) {
//   console.log(`Pivot index is ${pivotIndex()}`);
// } else {
//   console.log("No pivot index found");
// }
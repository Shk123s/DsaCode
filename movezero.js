function movezero(nums){
for(let i=nums.length;i>=0;i--)
{
    if(nums[i] === 0)
    {
        console.log(nums.splice(i,1));
        console.log(nums.push(0));
    }
}  
return nums;
}
console.log(movezero([1,0,3,0,4]));
console.log(movezero([34,0,12,30,0,4]));
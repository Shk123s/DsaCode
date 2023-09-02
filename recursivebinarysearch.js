function recursiveBinarySearch(arr,target)
{
    return search(arr,target,0,arr.length-1);
}
function search(arr,target,leftindex,rightindex)
{
    if(leftindex >rightindex)
    {
        return -1 ;
    }
    let middleindex = Math.floor((leftindex + rightindex)/2)
    
    if (target === arr[middleindex])
    {
        return middleindex;
    }
    if (target < arr[middleindex]) {
        return search(arr,target,leftindex,middleindex -1)
    }
    else
    {
        return search(arr,target,middleindex +1,rightindex)
    }
}
console.log(recursiveBinarySearch([-5,2,4,6,10],10)); //4
console.log(recursiveBinarySearch([-5,2,4,6,10],6)); //3
console.log(recursiveBinarySearch([-5,2,4,6,10],20));//-1
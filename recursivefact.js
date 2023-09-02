function recursivefact(n)
{
    if(n<2)
    {
        return 1;
    }
    return n * recursivefact(n-1);
} 
console.log(recursivefact(0));
console.log(recursivefact(5));
console.log(recursivefact(2));
console.log(recursivefact(1));
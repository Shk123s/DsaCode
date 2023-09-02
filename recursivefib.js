function recursivefib(n) {
    if (n < 2) {
        return n

    }
    return recursivefib(n - 1) + recursivefib(n - 2);;
}
console.log(recursivefib(4));
console.log(recursivefib(5));
console.log(recursivefib(6));
console.log(recursivefib(7));
console.log(recursivefib(1));
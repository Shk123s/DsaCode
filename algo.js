
  function fib(n)
  {   let fib = [0,1];

    for (let i = 2; i <n; i++) {
        
        fib[i]  =  fib[i-1] + fib[i-2] 
    }
    return fib;
  }
//   fib(2);
  console.log(fib(2))
  console.log(fib(3))
  console.log(fib(5))
  console.log(fib(6  ))
  // document.write( console.log(fib(2)))
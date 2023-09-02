
function primen(n){
        if (n < 2) {
        return false ;
            
 }
      for (let i = 2; i <= Math.sqrt(n); i++) {
       if (n % i === 0) {
         return  false;
       }
      
      }
         return true ;
    }
    

    console.log(primen(977));
    console.log(primen(3));
    console.log(primen(64));
    
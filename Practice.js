function isPrime(n){
   if (n <= 1) return false;
   for ( i = 2; i * i <= n; i++){
    if (n % i == 0) return false;
   } 
   return true;
}

function nextPrime(n) {
    let candidate = n + 1;
    while (true){
        if(isPrime(candidate) === true){
            return candidate;
        }
        candidate++;
    }
}
console.log(nextPrime(21));
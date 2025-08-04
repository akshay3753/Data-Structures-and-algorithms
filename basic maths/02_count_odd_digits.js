function odd(n){
    let count = 0;
    while (n > 0){
        let rem = n % 10;
        if ( rem % 2 !== 0){
            count++;
        }
        n = Math.floor(n / 10);
    }
    return count;
}
console.log(odd(1234));
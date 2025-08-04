function armstrong(n){
    let result = 0;
    let original = n
    while (n > 0){
        let rem = n % 10;
        let exponent = Math.pow(rem, 3);
        result += exponent; 
        n = Math.floor(n /10);
    }
    if (original === result){
        return true;
    } else {
        return false;
    }
}
console.log(armstrong(1532));
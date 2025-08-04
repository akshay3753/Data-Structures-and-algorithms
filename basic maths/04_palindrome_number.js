function palindrome(n) {
    let rev = 0;
    let original = n;
    while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem; 
        n = Math.floor( n / 10 );
    }
    if (rev === original) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome(123));
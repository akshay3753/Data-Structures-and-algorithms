function largest_digit(n){
    let max_digit = 0;
    while ( n > 0) { 
        let rem = n % 10;
        if (rem > max_digit){
            max_digit = rem;
        }
        n = Math.floor(n/10);
    }
    return max_digit;
}
console.log(largest_digit(12345));
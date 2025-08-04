function perfectNumber(n) {
    let i = 1;
    let sum = 0
    while (i < n){
        if (n % i == 0){
            sum += i;
        }
        i++;
    }
    return sum === n;
}
console.log(perfectNumber(12));
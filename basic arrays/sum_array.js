function arr(n){
    let sum = 0;
    for (let i of n){
        sum += i;
    }
    return sum;
}
console.log(arr([1,2,3,4,5]));
function gcd(a, b){
  while (b != 0){
    let temp = b;
    a = b;
    b = temp;
    b = b % a;
    if (b % a == 0){
      return a;
    }
  }
}
console.log(gcd(48, 18));
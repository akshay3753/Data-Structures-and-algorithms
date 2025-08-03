function Pattern10(n){
    for(let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
}
    
Pattern10(5);













// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
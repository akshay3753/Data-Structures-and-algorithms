function pattern16(n){
    let letter = 'A';
    let code = letter.charCodeAt(0);
    
    for (let i = 1; i <= n; i++){
        let row = "";
        let col = String.fromCharCode(code);
        for (let j = 1; j <= i; j++){
            row += col;
        }
        console.log(row);
        code++;
        
    }
}
pattern16(4);

// A
// BB
// CCC 
// DDDD
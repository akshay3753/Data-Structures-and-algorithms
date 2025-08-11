function pattern15(n){
    let letter = "A";
    for (let i = 1; i <= n; i++){
        let row = "";
        let code = letter.charCodeAt(0);
        for(let j = n; j >= i; j--){
            let col= String.fromCharCode(code);
            row += col;
            code++;
        }
        console.log(row);
        
    }
}
pattern15(4);


//ABCD
//ABC
//AB
//A
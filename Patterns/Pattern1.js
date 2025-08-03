function pattern1(n) {
    
    for (let i = 1; i <= n; i++ ){
        let row = "";
        for (j = 1; j <= n; j++){
             row += "* ";
        }
        console.log(row);
    }
    
}

pattern1(5);

// * * * * 
// * * * * 
// * * * * 
// * * * * 
function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if ((i + j) % 2 == 0) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row);
    }
}

pattern(1);



// 1 
// 0 1 
// 1 0 1 
// 0 1 0 1 
// 1 0 1 0 1
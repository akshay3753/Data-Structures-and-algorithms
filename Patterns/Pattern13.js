function pattern14(n) {
       
        for(let i = 1; i <= n; i++){
            let row = "";
            let code = 65;
            for (let j = 1; j <= i; j++){
                let num = String.fromCharCode(code);
                row += num;
                code++;
            }
            console.log(row);
        }
    }
pattern14(4);

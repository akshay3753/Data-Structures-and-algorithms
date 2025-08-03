function Pattern6(n){
    
    for (let i = 1; i <= n; i++){
        let row= "";
        
        for (let j = 1; j <= n - i + 1; j++){
            row += j;
           
        }
        console.log(row);
        
    }
}
Pattern6(5);









// 12345
// 1234
// 123
// 12
// 1
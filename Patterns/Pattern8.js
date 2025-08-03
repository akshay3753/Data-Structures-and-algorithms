function Pattern8(n){
    for (let i = 1; i <= n; i++){
        let row = "";
    for (let j = 1; j <= i - 1; j++ ){
        row += " ";
    } for (let j = 1; j <= 2 * (n - i + 1) -1; j++){
        row += "*";
        
    }

    console.log(row);
}
}
Pattern8(5);




// *********  rows = 5  1st row -- > 9  colums  space -- > 0 
//  *******             2nd row -- > 7             ---> 1 
//   *****              3rd row - 5                ---> 2
//    ***               4th row - 3                     3    
//     *                5th row  - 1                    4
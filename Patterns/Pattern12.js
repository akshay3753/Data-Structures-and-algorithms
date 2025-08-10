function pattern(n) {
        for(let i = 1; i <= 5; i++){
            let row = "";
            for (let j = 1; j <= i; j++){
                row += j;
            }
            for(let star = 1; star <= 2 * (n -i); star++){
                row += " ";
            }
            for (let j = i ; j > 0; j--){
                row += j;
            }
        console.log(row)
    }
}
pattern(5);
















// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

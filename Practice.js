// let letter = 'Z';
// let code = letter.charCodeAt(0);
// console.log(String.fromCharCode(code));

// letter = "K";
// console.log(letter.charCodeAt(0));

// let letter_1 = "D";
// let code = letter_1.charCodeAt(0);
// for (i = 1; i <= 5; i++){
//     console.log(String.fromCharCode(code));
//     code++;
// }

// let letter = "A";
// let code = letter.charCodeAt(0);
// for (i = 1; i <= 26; i++){
//     console.log(String.fromCharCode(code));
//     code++;
// }
let n = 4;
let letter = "A";

for (let i = 1; i <= n; i++){
    let row = "";
     let code = letter.charCodeAt(0);
    for(let j = 1; j <= i; j++){
       
        let col = String.fromCharCode(code);
        row += col;
        code++;
    }
    console.log(row);
}
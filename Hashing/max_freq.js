let arr = [1,1,1,2,3,3,4,4,4];
let freq = {};

for (let i = 0; i < arr.length; i++ ){
    let num = arr[i];
    if (freq[num] === undefined){
        freq[num] = 1;
    } else {
        freq[num] = freq[num] + 1;
    }
}

let max_freq = 0;
let max_num = null;

for (let key in freq){
    if(freq[key] > max_freq){
        max_freq = freq[key];  // Fix: lowercase "f"
        max_num = key;         // Fix: lowercase "n"
    }
}

console.log(max_num);

let arr = [1, 1, 2, 3, 3,5, 3, 4];
freq = {}
for (let i = 0; i < arr.length;i++){
    let num = arr[i];
    if(freq[num] === undefined){
        freq[num] = 1;
    }else {
        freq[num] += 1;
    }
}
console.log(freq);

let maxCount = 0;
let maxNum = null;
for (let key in freq){
    let count = freq[key];
    let num = Number(key);
    if (count > maxCount){
        maxCount = count;
        maxNum = num;
    }else if(count === maxCount && num < maxNum){
        maxNum = num;
    }
 }
 let minNum = null;
 let minCount = Infinity;
 for (let key in freq){
    let count = freq[key];
    let num = Number(key);
    if (count < minCount){
        minCount = count;
 }
}

console.log(maxCount + minCount);
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4];
let freq = {};

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num] === undefined){
        freq[num] = 1;
    } else{
        freq[num] = freq[num] + 1;
    }
}
let max_count = 0;
let max_num = null;

 let secondMaxCount = 0
 let secondMaxNum = null;

for (let key in freq) {
    let count = freq[key];
    let num = Number(key);
    if (count > max_count){
        secondMaxCount = max_count;
        secondMaxNum = max_num; 
        max_count = count;
        max_num = num;

    }else if(count === max_count && num < max_num){
        max_num = num;
    }
    else if(count < max_count && count > secondMaxCount){
        secondMaxCount = count; 
        secondMaxNum = num;
    }else if(count === secondMaxCount && num < secondMaxNum){
        secondMaxNum = num;
    }
}

if (secondMaxCount === 0){
    console.log(-1);
}else{
    console.log(secondMaxNum);
}
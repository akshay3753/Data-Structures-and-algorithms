function largestOddSubstring(s){
    let lastOddIndex = -1;
    for (let i = s.length -1; i >= 0; i--){
        if(s[i] % 2 !== 0){
            lastOddIndex = i;
            break;
        }
    }

    if (lastOddIndex === -1) {
        return "";
    }

    let result = s.substring(0,lastOddIndex + 1);

    let start = 0;
    while(start < result.length && result[start] === '0'){
        start++;
    }

    result = result.substring(start);

    if(result === ""){
        return "";
    }
    return result;
}
console.log(largestOddSubstring("02345678"));
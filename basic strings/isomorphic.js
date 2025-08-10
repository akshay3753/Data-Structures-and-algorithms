function isIsomorphic(s, t){
    if (s.length !== t.length){
        return false;
    }

    let mapST = {};
    let mappedT = {};

    for (let i = 0; i < s.length; i++){
        let charS = s[i];
        let charT = t[i];

        if(mapST[charS] !== undefined){
            if(mapST[charS] !== charT){
                return false;
            }
        } else {
            if (mappedT[charT]) {
                return false;
            }

            mapST[charS] = charT;
            mappedT[charT] = true;
        }
        
    }
    return true;
}

console.log(isIsomorphic("foo","pdd"));
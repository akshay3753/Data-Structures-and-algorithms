function longestCommonPrefix(arr) {
    if (arr.length === 0) return "";

    // Step 1: Assume the first word is the prefix
    let prefix = arr[0];

    // Step 2: Compare with all other words
    for (let i = 1; i < arr.length; i++) {
        let j = 0;

        // Step 3: Compare characters one by one
        while (
            j < prefix.length &&
            j < arr[i].length &&
            prefix[j] === arr[i][j]
        ) {
            j++;
        }

        // Step 4: Trim prefix to matched portion
        prefix = prefix.substring(0, j);

        // If prefix becomes empty, no need to check further
        if (prefix === "") return "";
    }







    

    // Step 5: Return final prefix
    return prefix;
}

// Test
console.log(longestCommonPrefix(["flowers", "flow", "fly", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "cat", "animal", "monkey"]));   // ""

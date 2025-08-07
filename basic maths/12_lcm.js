class Solution {
    LCM(a, b) {
        let originalA = a;
        let originalB = b;

        // Find GCD using Euclidean algorithm
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        // a now holds the GCD
        let gcd = a;

        // LCM formula
        return (originalA * originalB) / gcd;
    }
}
const s = new Solution();
const ans = s.LCM(12, 18); 
console.log(ans);
class Solution {
    reverseNumber(n) {
        let rev = 0;
        while (n > 0) {
            let rem = n % 10;
            rev = rev * 10 + rem;
            n = Math.floor(n / 10);
        }
        return rev;
    }
}

const sol = new Solution();
console.log(sol.reverseNumber(1234));  // Output: 4321
console.log(sol.reverseNumber(100));   // Output: 1

let palindrome = "abcba";
let left = 0;
let right = palindrome.length -1;
while (left < right){
    if(palindrome[left] != palindrome[right]){
        return false;
    }
    left++;
    right--;
}
return true;
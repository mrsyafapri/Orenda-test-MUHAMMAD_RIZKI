/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  // Convert the number to a string
  const numStr = x.toString();

  // Initialize left and right pointers
  let left = 0;
  let right = numStr.length - 1;

  // Iterate over the string and compare characters from left and right
  while (left < right) {
    if (numStr[left] !== numStr[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }

  return true; // It's a palindrome
};

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(123)); // Output: false
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(1234)); // Output: false

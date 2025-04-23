
//Write a JavaScript program to remove all characters from a given string that appear more than once

 /* Function to remove duplicate characters from a string
 * @param {string} str - The input string
 * @returns {string} - The string without duplicate characters
 */
function remove_duplicate_chars(str) {
  // Split the string into an array of characters
  var arr_char = str.split("");
  var result_arr = [];

  // Loop through each character of the array
  for (var i = 0; i < arr_char.length; i++) {
    // Check if the first and last occurrence of a character in the string are the same
    if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
      result_arr.push(arr_char[i]);
  }

  // Join the array of unique characters and return as a string
  return result_arr.join("");
}

console.log(remove_duplicate_chars("abcdabc"));
console.log(remove_duplicate_chars("python"));
console.log(remove_duplicate_chars("abcabc"));
console.log(remove_duplicate_chars("1365451"));
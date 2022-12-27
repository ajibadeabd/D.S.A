let stringA = "aabbc";

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
  console.log( reverseStr , lowRegStr);
    return reverseStr === lowRegStr;
  }
  
  console.log(
  palindrome("A man, a plan, / !@#$^&*()a canal. Panama")
  )
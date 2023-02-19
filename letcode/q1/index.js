/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let set = s.split("").reduce((a,b)=>{
        a[b] = ++a[b] || 1
        return a
    },{})
    let maxOdd = 0
    let maxEven = 0
    for(c in set ){
    if(set[c]%2!=0){
         maxOdd == 0 ? maxOdd += set[c]: maxOdd += (set[c]-1)
    }else{
        maxEven+=set[c]
     }
    }
    return maxOdd+maxEven
    
    };
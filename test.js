var MAX = 26;

String.prototype.replaceAt = function(index, replacement) {
	return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function smallestStr(str, n)
{
	let i, j;
	// To store the first index of
	// every character of str
	const chk=[];
	for (i = 0; i < MAX; i++)
		chk[i] = -1;

	
// console.log(chk,n)
	// Store the first occurring
	// index every character
	for (i = 0; i < n; i++) {

		// If current character is appearing
		// for the first time in str
		if (chk[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] == -1)
			chk[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
	}
// console.log(chk,n)
	

	// Starting from the leftmost character
	for (i = 0; i < n; i++) {

		let flag = false;

		// For every character smaller than str[i]
		for (j = 0; j < str[i].charCodeAt(0) - 'a'.charCodeAt(0); j++) {

			// If there is a character in str which is
			// smaller than str[i] and appears after it
			if (chk[j] > chk[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
				flag = true;
				break;
			}
		}

		// If the required character pair is found
		if (flag)
			break;
	}

	// If swapping is possible
	if (i < n-1) {

		// Characters to be swapped
		let ch1 = str[i];
		let ch2 = String.fromCharCode(j + 'a'.charCodeAt(0));

		// For every character
		for (i = 0; i < n; i++) {

			// Replace every ch1 with ch2
			// and every ch2 with ch1
			if (str[i] == ch1)
				str=str.replaceAt(i,ch2);

			else if (str[i] == ch2)
				str=str.replaceAt(i,ch1);
		}
	}

	return str;
}

let str = "bbcacad"
console.log(
smallestStr(str,str.length)
)
let ans = smallestStr(str,str.length)
const test = (ans)=>{
    if( ans!=smallestStr(ans,str.length)){
		return test(smallestStr(ans,str.length))
    }
    else{
        return ans
    }

}
console.log(test(ans))
// let str ="tsraa";
//   const s =    str.split("").reduce((prev,cur)=>{

//          if(prev[1][cur]!==cur){
//             prev[1][cur]=cur
//             prev[0].push(cur)
//             } 
//          return prev

//      },[[],{}])
//     //  let strs = "bdea";
//      for(let i=1;i<s[0].length;i++){
//         str=  str.replace(s[0][i-1],s[0][i].toUpperCase())
//         str=  str.replace(s[0][i],s[0][i-1].toUpperCase())
//         str=  str.toLowerCase()
//      }

//  console.log(str)







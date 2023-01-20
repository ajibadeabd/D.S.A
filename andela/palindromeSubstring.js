
// let s = "cdecd"
// let start = [0,0,0,0]
// let end = [0,1,2,3]
// let sub = [0,1,1,0]
let s = "xxdnssuqevu"
let start = [0]
let end = [10]
let sub = [3]
function palindromeSubstring(str, startIndex, endIndex, subs) {
	let result = '';
	for (let i = 0; i < startIndex.length; i++) {
	  let substring = str.substring(startIndex[i], endIndex[i] + 1);
        let pp = substring.split("").reduce((a,b)=>{  
            a[b]=++a[b] || 1;
            if(a[b]%2==0){ delete a[b]}    
            return a
        },{})
    let l = Object.keys(pp).length
    if(l%2==0 &&  l/2<=subs[i]){
result+="1"
    }else if((l/2-0.5)<=subs[i]){
result+="1"
    }else{
result+="0"
    }
	}
	return result;
  }
console.log(palindromeSubstring(s,start,end,sub)) 
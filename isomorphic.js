
str1 = "ALSMWAS";
str2 = "XQSDAXS";
function isIsomorphic(str1, str2) {
 
    // If length of strings are not equal then
    // they are not isomorphic
    if (str1.length !== str2.length) {
        return false;
    }

    // Map to store the mapping between
    // characters of first string to second
    const map = new Map();

    // Set to store the already mapped
    // character of second string
    const set = new Set();

    for (let i = 0; i < str1.length; i++) {

        // Taking ith char from both strings
        char1 = str1.charAt(i);
        char2 = str2.charAt(i);

        // If char1 has already been mapped
        if (map.has(char1) == true) {

            // Then we have to check that
            // mapped char should be same
            if (map.get(char1) !== char2) {
                return false;
            }
        }

        // If char1 is appearing for the first time
        else {

            // Check in the set that the char2
            // is already there or not
            if (set.has(char2)) {
                return false;
            }

            // If none of above condition is true
            // it means both char1 and char2 are
            // appearing for the first time
            // insert them into the map
            map.set(char1, char2);
            set.add(char2);
        }
    }
    return true;
}

console.log(isIsomorphic(str1, str2))

function isIsomorphic2(str1, str2) {
if(str1.length!==str2.length)return false
 

let s = true
for(let i=0;i<str1.length;i++){
    for(let j=0;j<str1.length;j++){

        if(str2[i]==str2[j] && str1[i]==str1[j]){
        }else if(str2[i]==str2[j] && str1[i]!==str1[j]){
            s=false
            break
        }else if(str2[i]!==str2[j] && str1[i]==str1[j]){
            s=false
            break
        }
    }
    if(!s) return s
}
  return true
}


console.log(isIsomorphic2(str1, str2))

function isIsomorphic3(str1, str2) {
    let res=true
        let s = str1.split("").reduce((a,b,i)=>{
        if(a[b]){
            if(a[b]!==str2[i]){
                res=false
            }
        }else{
            a[b]=str2[i]
        }
        return a
        },{})
        return res
    }
    console.log(isIsomorphic3(str1, str2))
 
function isIsomorphic4(str1, str2) {
    let res=true
    let bank = {}

    for(let i=0;i<str1.length;i++){
        if(bank[str1[i]]){
            if( bank[str1[i]]!==str2[i]){
                res=false
            console.log("mismatch")
                break
            }
        }else{
            bank[str1[i]]=str2[i]
        }

    } 
        return res
    }
    console.log(isIsomorphic4(str1, str2))
         
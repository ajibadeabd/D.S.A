
function repeatedString(s, n) {

let [num,dec] = String((n/s.length).toFixed(2)).split(".")
let occur = 0
occur=  s.split("").filter((a)=>a=="a").length * num
let rem = 0
if(dec!=0){
   rem =  s.split("").filter((a,i)=>a=="a" && i<String(dec)).length
}
return occur + rem
}

console.log(repeatedString("aab",882787))
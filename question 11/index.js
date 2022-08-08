
function repeatedString(s, n) {

let [num,dec] = String((n/s.length).toFixed(2)).split(".")
let occur = 0
occur=  s.split("").filter((a)=>a=="a").length * num
dec = Math.round(Number(`0.${dec}`) * s.length)
occur = occur + s.slice(0,-(s.length-dec)).split("").filter((num)=>num=="a").length
return occur

}

console.log(repeatedString("aab",882787))
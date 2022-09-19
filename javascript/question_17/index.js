
const n = 5
const p = 4
let s = Math.floor(p/2)
let t= n%2==0?
Math.abs(Math.round(( n-p)/2)):
Math.floor(( n-p)/2)

console.log(s>t?t:s)
console.log({s})
console.log({t})
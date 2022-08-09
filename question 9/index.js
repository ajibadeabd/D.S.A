function rotLeft(a, d) {
    if(a.length===d) return a.reverse()
    const ff = a.filter((num,i)=> i>=d).push(...a.filter((num,i)=> i<d))
return ff
}
console.log(rotLeft([1,2,3,4],4))
console.log([1,2,3].pop(22))
console.log([1,2,3].slice(0,-2))
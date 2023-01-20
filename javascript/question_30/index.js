let grid = 
// ["abc",
// "lmp",
// "qrt"
// ]
[
"abcd",

 "mpxz",
"wlmf",
]
// [
//    "abc",
//    "hjk",
//     "mpq",
//     "rtv"
// ]
// ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']

// console.log("nmdfvgte".split("").sort((a,b)=>  a.charCodeAt(0)- b.charCodeAt(0)))

let sortedGrid = grid.map((a)=>a.split("").sort((a,b)=>  a.charCodeAt(0)- b.charCodeAt(0)))
// console.log(sortedGrid)
let a=true
    for(let i = 0; i<sortedGrid[0].length;i++){
        if(!a) break
    let newa = []
    for(let j = 0; j<sortedGrid.length;j++){
        if(j!=0){ 
            if(newa[newa.length-1].charCodeAt()>sortedGrid[j][i].charCodeAt()){
                a=false
                break
            }
        }
        newa.push(sortedGrid[j][i])
        
    }
}
console.log (a?"YES":"NO")
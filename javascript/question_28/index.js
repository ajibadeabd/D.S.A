let s = "The quick brown brown fox jumps over the lazy dog"


let alpha = "abcdefghijklmnopqrstuvwxyz"
let alphaDic = alpha.split("").reduce((prev,curr)=>{
    prev[curr] = curr
    return prev
},{})
let number = 0
for(let i = 0; i <s.length;i++){
let small = s[i].toLowerCase()
    if(small ===alphaDic[small]){
        delete alphaDic[small]
        number++
    }
}

console.log(number==26?"pangram":"not pangram")
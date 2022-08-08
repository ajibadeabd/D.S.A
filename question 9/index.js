


const ss = [1,2,2,3,44]

let answer = []
for(let i=0; i<ss.length;i++){
    if(ss[i]!=(i+1)){
        console.log(ss[i],i+1)
answer.push(ss[i],i+1)
    }

}

console.log(answer)
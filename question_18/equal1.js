 
// let arr = [2,4,8]
let arr = [1,2,3]

arr = arr.sort((a,b)=>a-b)
let all=0
for(let i=1;i<arr.length;i++){
    if(  arr[i]!=arr[0]){
        all+=  ( arr[i]/arr[0])-1

    }
}
console.log(all)
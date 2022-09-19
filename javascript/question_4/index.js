
function miniMaxSum(){
    let sss = [1,2,3,4,5]
let ss = []
for(let i=0; i<sss.length; i++){
    let s= 0
    for(let j=0; j<sss.length; j++){
        if(i!==j) {
            s+=sss[j]
        }
    }
    ss.push(s)

}
console.log(ss.sort()[0], ss.sort()[ss.length-1])
}
miniMaxSum(10)  // O(n*n)



function miniMaxSum2(array){


    let firstSum = array.reduce((a,b)=>a+b)
    const Sum= array
    const sortSum= Sum.sort((a, b) => a - b)
    const maxSum= firstSum-sortSum[0]
    const maxSum2= firstSum-sortSum[array.length-1]
    console.log(maxSum2, maxSum)
}
miniMaxSum2([1,2,3,4,5])  // O(2n)  --> O(n)

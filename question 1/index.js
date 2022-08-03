const diagonalDifference = (arr)=>{
    let ans1=0
    let ans2=0
    let aLength=arr.length - 1
    arr.map((num,i)=>{
        ans1+=num[i]
        ans2+=num[aLength-i]
    })
    return Math.abs(Math.abs(ans1)-Math.abs(ans2))
}
const arrays = [
    [2,3,4],
    [2,3,4],
    [1,3,4],
]
console.log(diagonalDifference(arrays))
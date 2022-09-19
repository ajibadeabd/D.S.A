// question 1

const diagonalDifference = (arr)=>{
    let ans1=0
    let ans2=0
    let arrIndex=arr.length - 1
    arr.map((num,i)=>{
        ans1+=num[i]
        ans2+=num[arrIndex-i]
    })
    let response  =  Math.abs(Math.abs(ans1)-Math.abs(ans2))
    console.log(response)
    return response
}


// question 2

const diagonalDifference2 = (arr)=>{
    let arrIndex=arr.length - 1;
    const resp = arr.reduce((prev,curr,i)=>{
        prev[0]+=curr[i]
        prev[1]+=curr[arrIndex-i]
        if(arrIndex==i){
            return Math.abs(Math.abs(prev[0])-Math.abs(prev[1]))
        }
        return prev
    },[0,0])
    console.log(resp)
    return  resp 
}
const arrays = [
    [2,3,4],
    [2,3,4],
    [1,3,4],
]
 diagonalDifference(arrays)
 diagonalDifference2(arrays)
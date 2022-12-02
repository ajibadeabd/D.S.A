





// let arr = [40,50,60]
// let arr2 = [5,8,12]
// arr2.sort((a,b)=>b-a)
// let ans = []
// arr.map((a)=>{
//     let b = 60-a
//    let x =  arr2.filter((a)=>{ return a<=b})[0]
//    if(b!=0) ans.push(a+x)
// })

// console.log(ans)

function getMoneySpent(keyboards, drives, b) {

    drives.sort((a,b)=>b-a)
    keyboards.sort((a,b)=>b-a)

    let income = keyboards.length> drives.length ?[keyboards, drives]:[ drives,keyboards]

    let answer = income[0].map(element => {
    let c = b-element
   let  x =  income[1].filter((a)=>a<=c)[0]
   if(c!=0) return (element +x)
    }).sort((a,b)=>b-a)[0]
    return answer <=b?answer:-1
}

console.log(
// getMoneySpent([40,50,60],[5,8,12],60)
getMoneySpent( [3, 1 ], [ 5, 2, 8 ], 10)

)
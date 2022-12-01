// function rotLeft(a, d) {
//     if(a.length===d) return a.reverse()
//     const ff = a.filter((num,i)=> 
//     i-1>=d)
//     let dd = a.filter((num,i)=> i-1<d)
// ff.push(...dd)
    
// return ff
// }
// console.log(rotLeft([1,2,3,4,5,6,7],3))
// // console.log([1,2,3].pop(22))
// // console.log([1,2,3].slice(0,-2))

const findJudge = (N, trust) => {
    if(trust.length ==0) return 1


    // keep track of how many likes the element gives
    // let likesCountList = {}
    // //keep track of how many likes the element receives
    // let beingLikedCountList = {}
    
    // //hash the key from 1 to N
    for(let i = 1; i <= N; i++){
    //     likesCountList[i] = 0
        // beingLikedCountList[i] = 0
    }
    
    // //loop through trust to hash value to hashes
    // for(let ele of trust){
    //     likesCountList[ele[0]]++
    //     beingLikedCountList[ele[1]]++
    // }
    
    // //variable to store potential judge
    
    // let judge = 0
    // //if the element doesn't give out any likes
    // //it is the potantial judge
    // for(key in likesCountList){
    //     if(likesCountList[key] === 0) judge = key
    // }
    
    // //if the potential judge receives likes from everybody other than itself
    // //it means it is the judge
    // //otherwise judge doesn't exist
    
    // if(beingLikedCountList[judge] === N - 1) return judge
    // else return -1
    
    
   
};

// findJudge(3,[[1,2],[2,3]])

console.log(

findJudge(3,[[1,2],[2,3]])

)
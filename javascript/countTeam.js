// solution 1
function count(skills, minPlayer,minLevel,maxLevel){
let count = 0
  let range = skills.filter((skill)=>skill>=minLevel&&skill<=maxLevel)
//   console.log(range,minPlayer)
// console.log(range)

    for(let i = minPlayer;i<=range.length;i++){

        count+= factorial(range.length)/(factorial(i)*factorial(range.length-i))
    }
    return count
}



// // solution 2
function count2(skills, minPlayer,minLevel,maxLevel){
    let count = 0
      let range = skills.filter((skill)=>skill>=minLevel&&skill<=maxLevel)
    for(let i = minPlayer;i<=range.length;i++){
        let ranVal = fun(range.length, i+1)/factorial(range.length- i)
    count+=ranVal
    }
    return count
    }
    

// // solution 3
// function count2(skills, minPlayer,minLevel,maxLevel){
//     let count = 0
//       let range = skills.filter((skill)=>skill>=minLevel&&skill<=maxLevel)
//     for(let i = minPlayer;i<=range.length;i++){
//         let ranVal = fun(range.length, i+1)/factorial(range.length- i)
//     count+=ranVal
//     }
//     return count
//     }
    
        


const fun = function test(hi,low){
    let count = 1
    for(let i=low;i<=hi;i++){
        count*=i
    }
    return count
}
// console.log(count([12,4,6,13,5,10],3,4,10))
console.log(count2([ 4, 8, 5, 6 ] ,1, 5, 7))
console.log(count([ 4, 8, 5, 6 ] ,1, 5, 7))
// console.log(count([1,2,3,4,5,6],4,2,9))




function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
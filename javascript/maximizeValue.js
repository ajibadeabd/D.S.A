// let array =[21,9,7,34,5] 
// let smallestNumber = 0

// if(array.length%2==0){
//   smallestNumber=(array.length/2 )-1
// }else{
//   smallestNumber=(array.length-1)/2 
// }
// let array2=array
// array =  Object.freeze(array)
// const sorted = [...array2].sort((a,b)=>a-b).slice(0,smallestNumber) 
// let answer = []
// const Bigsorted = [...array2].sort((a,b)=>a-b).slice(-(array.length-smallestNumber ))
// answer=[Bigsorted[0],Bigsorted[1]]
// Bigsorted.shift()
// Bigsorted.shift()
// for(let i = 2; i<=array.length;i++){
//   if(i%2!==0) {
//     answer.push(sorted.shift())
//   }else if(i!==2){
//     answer.push(Bigsorted.shift())
//   }
// }

// console.log(
//   answer.reduce((previousValue,currentValue,index)=>{
//   if(index==0|| index==1){
//       previousValue.push(currentValue)
//   }
//   else if(index%2==0){
//       previousValue.push(currentValue)
//   }
//   else{
//        previousValue.push(currentValue)
//   }
//   return previousValue
// },[])
// )


let array = [1,12,5,6,8,9]
console.log(array)
array=array.sort((a,b)=>-b+a)
let sortedArra
console.log(array)
